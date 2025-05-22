// app/api/auth/login/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connection from "@/lib/connection";
import sendEmail from "@/lib/sendEmail"; // Tu bana raha hai ya bol de bana ke de dun

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;
    
    const db = await connection();

    const [rows] = await db.execute("SELECT * FROM admin WHERE email = ?", [email]);
    const owner = rows[0];

    if (!owner) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, owner.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 min

    await db.execute("UPDATE admin SET otp = ?, otpExpires = ? WHERE email = ?", [
      otp,
      otpExpires,
      email,
    ]);

    await sendEmail(email, "Login OTP", `Your OTP is ${otp}`);

    return NextResponse.json({ message: "OTP sent to email" });
  } catch (error) {
    console.error(error);
    
    return NextResponse.json({ message: "Login error", error: error.message }, { status: 500 });
  }
}
