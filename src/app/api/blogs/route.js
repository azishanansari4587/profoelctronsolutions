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


export async function GET(request) {
    try {
      const db = await connection();
  
      const [rows] = await db.execute("SELECT * FROM blogs");
  
      return NextResponse.json({
        message: "Blogs fetched successfully",
        subscribers: rows,
      });
    } catch (error) {
      return NextResponse.json(
        { message: "Error fetching blog", error: error.message },
        { status: 500 }
      );
    }
  }



 // In your /api/blogs/route.js (or wherever your blog API is)
export async function PUT(req) {
  try {
    const {
      id,
      title,
      excerpt,
      content,
      category,
      date,
      image,
      author,
      status,
    } = await req.json();

    if (!id || !title || !excerpt || !category) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    const db = await connection();

    await db.query(
      `UPDATE blogs SET title=?, excerpt=?, category=?, date=?, author=?, status=?, content=?, image=? WHERE id=?`,
      [title, excerpt, category, date, author, status, content, image, id]
    );

    return NextResponse.json(
      { message: "Blog updated successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Blog Update Error:", error);
    return NextResponse.json(
      { message: "Failed to update blog", error: error.message },
      { status: 500 }
    );
  }
}
