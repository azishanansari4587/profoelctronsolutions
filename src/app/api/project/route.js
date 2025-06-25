export async function POST(req) {
    
    try {
        const {name, image, category, client_name, contact, client_field, keywords, short_description, start_date,  end_date, status} = await req.json();

        if (!name  || !category || !client_name || !contact ) {
            return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
        }
        
         const db = await connection();
        await db.query(`INSERT INTO projects (name, image, category, client_name, contact, client_field, keywords, short_description, start_date, end_date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [name, image, category, client_name, contact, client_field, keywords, short_description, start_date, end_date, status]
        );
        return NextResponse.json({message: "Project Add Successfully"}, {status: 201});
    } catch (error) {
        console.error("Project Add error:", error);
        return NextResponse.json({ message: "Failed to send message", error: error.message }, { status: 500 });
    }
}



export async function PUT(req) {
  try {
    const {
      id,
      name,
      image,
      category,
      client_name,
      contact,
      client_field,
      keywords,
      short_description,
      start_date,
      end_date,
      status,
    } = await req.json();

    if (!id || !name || !category || !client_name || !contact) {
      return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
    }

    const db = await connection();
    await db.query(
      `UPDATE projects 
       SET name = ?, image = ?, category = ?, client_name = ?, contact = ?, client_field = ?, keywords = ?, short_description = ?, start_date = ?, end_date = ?, status = ?
       WHERE id = ?`,
      [
        name,
        image,
        category,
        client_name,
        contact,
        client_field,
        keywords,
        short_description,
        start_date,
        end_date,
        status,
        id,
      ]
    );

    return NextResponse.json({ message: "Project updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Project update error:", error);
    return NextResponse.json({ message: "Failed to update project", error: error.message }, { status: 500 });
  }
}



export async function GET(request) {
  try {
    const db = await connection();

    const [rows] = await db.execute("SELECT * FROM projects");

    return NextResponse.json({
      message: "Projects fetched successfully",
      subscribers: rows,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching projects", error: error.message },
      { status: 500 }
    );
  }
}



export async function DELETE(request) {
  try {
    const db = await connection();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Project ID is required" },
        { status: 400 }
      );
    }

    const [result] = await db.execute("DELETE FROM projects WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Project deleted successfully",
    });
    
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting project", error: error.message },
      { status: 500 }
    );
  }
}


