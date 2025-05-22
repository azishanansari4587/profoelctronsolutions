// app/api/contact/route.js
import { NextResponse } from "next/server";
import connection from "@/lib/connection";
import sendEmail from "@/lib/sendEmail";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    const db = await connection();
    await db.execute(
      "INSERT INTO contact (name, email, subject, message) VALUES (?, ?, ?, ?)",
      [name, email, subject, message]
    );

    await sendEmail(
      email,
      "Thanks for contacting us!",
      `Hi ${name},\n\nThank you for getting in touch with us!\n\nWe’ve received your message and truly appreciate you contacting us. Our team is reviewing your inquiry and will get back to you as soon as possible—typically within 24–48 hours.\n\nIf your matter is urgent, feel free to reach out to us directly at 6387972245. \n\nThanks again for reaching out. We look forward to assisting you! \n\nWarm regards, \n\nMohammad Zishan Ansari \n\nTeam Profoelctron Solutions \n\n[Company Website]`
    );

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ message: "Failed to send message", error: error.message }, { status: 500 });
  }
}



export async function GET(request) {
  try {
    const db = await connection();

    const [rows] = await db.execute("SELECT * FROM contact");

    return NextResponse.json({
      message: "Contact fetched successfully",
      subscribers: rows,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching contact", error: error.message },
      { status: 500 }
    );
  }
}
