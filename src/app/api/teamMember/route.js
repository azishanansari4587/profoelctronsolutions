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


export async function GET(request) {
  try {
    const db = await connection();

    const [rows] = await db.execute("SELECT * FROM team_members");

    return NextResponse.json({
      message: "Team Member fetched successfully",
      subscribers: rows,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching team member", error: error.message },
      { status: 500 }
    );
  }
}



export async function PUT(req) {
  try {
    const { id, name, position, role, description, imageUrl, status } = await req.json();

    if (!id || !name || !position || !role || !description || !imageUrl || !status) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const db = await connection();
    await db.query(
      `UPDATE team_members 
       SET name = ?, position = ?, role = ?, description = ?, image = ?, status = ?
       WHERE id = ?`,
      [name, position, role, description, imageUrl, status, id]
    );

    return NextResponse.json({ message: 'Team member updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating team member:', error);
    return NextResponse.json({ message: 'Failed to update team member' }, { status: 500 });
  }
}




export async function DELETE(request) {
  try {
    const db = await connection();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Team Member ID is required" },
        { status: 400 }
      );
    }

    const [result] = await db.execute("DELETE FROM team_member WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: "Team Member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Team Member deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting team member", error: error.message },
      { status: 500 }
    );
  }
}
