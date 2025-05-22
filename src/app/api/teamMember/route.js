// app/api/team/route.js
import { NextResponse } from 'next/server';
import connection from '@/lib/connection';

export async function POST(req) {
  try {
    const { name, position, role, description, imageUrl, status } = await req.json();

    if (!name || !position || !role || !description || !imageUrl || !status) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const db = await connection();
    await db.query(
      `INSERT INTO team_members (name, position, role, description, image, status) VALUES (?, ?, ?, ?, ?, ?)`,
      [name, position, role, description, imageUrl, status]
    );

    return NextResponse.json({ message: 'Team member added successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error adding team member:', error);
    return NextResponse.json({ message: 'Failed to add team member' }, { status: 500 });
  }
}
