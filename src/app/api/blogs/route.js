import { NextResponse } from "next/server";
import connection from "@/lib/connection";


export async function POST(req) {
    
    
    try {
        const {title, excerpt, content, category,date, image, author, status} = await req.json();

        if (!title  || !excerpt || !category) {
            return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
        }
        
         const db = await connection();
        await db.query(`INSERT INTO blogs (title, excerpt, category, date, author, status, content, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [title, excerpt, category, date, author, status, content, image]
        );
        return NextResponse.json({message: "Blog Post Successfully"}, {status: 201});
    } catch (error) {
        console.error("Blog Post error:", error);
        return NextResponse.json({ message: "Failed to send message", error: error.message }, { status: 500 });
    }
}