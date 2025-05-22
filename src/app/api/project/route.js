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