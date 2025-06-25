import { NextResponse } from "next/server";
import connection from "@/lib/connection";
import sendEmail from "@/lib/sendEmail";

export async function POST(req) {
  try {

      
    const {
      name,
      email,
      phone,
      company_name,
      service,
      date,
      time,
      message,
    } = await req.json();

    const db = await connection();

    await db.execute(
        `INSERT INTO consultation (name, email, phone, company_name, service, date, time, message)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          name ?? null,
          email ?? null,
          phone ?? null,
          company_name ?? null,
          service ?? null,
          date ?? null,
          time,
          message ?? null,
        ]
      );
      

    // Send thank-you email
    await sendEmail(
      email,
      "Consultation Booked",
      `Hi ${name},\n\nThank you for booking your free consultation with us! \n\nWe’re excited to connect with you and help you take the next step. Our team will get in touch shortly to confirm your appointment details and answer any questions you might have. \n\nIn the meantime, if you need immediate assistance, feel free to contact us at contact@profoelctronsolutions.com or 6387972245. \n\We look forward to speaking with you soon! \n\nBest regards, \n\n Mohammad Zishan Ansari \n\nTeam Profoelctron Solutions \n\nprofoelctronsolutions.com`
    );

    return NextResponse.json({ message: "Consultation booked successfully!" });
  } catch (error) {
    console.error("Consultation error:", error);
    return NextResponse.json({ message: "Failed to book consultation", error: error.message }, { status: 500 });
  }
}



export async function GET(request) {
  try {
    const db = await connection();

    const [rows] = await db.execute("SELECT * FROM consultation");

    return NextResponse.json({
      message: "Consultation fetched successfully",
      subscribers: rows,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching consultation", error: error.message },
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
        { message: "Consultation ID is required" },
        { status: 400 }
      );
    }

    const [result] = await db.execute("DELETE FROM consultation WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: "Consultation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Consultation deleted successfully",
    });

  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting Consultation", error: error.message },
      { status: 500 }
    );
  }
}


