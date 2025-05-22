// app/api/auth/verifyLoginOtp/route.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connection from "@/lib/connection";
import { cookies } from "next/headers";



export async function POST(req) {
  try {
    const body = await req.json();
    const { email, otp } = body;

    const db = await connection();

    const [rows] = await db.execute(
      "SELECT * FROM admin WHERE email = ? AND otp = ? AND otpExpires > NOW()",
      [email, otp]
    );

    const owner = rows[0];

    if (!owner) {
      return NextResponse.json({ message: "Invalid or expired OTP" }, { status: 400 });
    }

    await db.execute("UPDATE admin SET otp = NULL, otpExpires = NULL WHERE email = ?", [email]);

    const token = jwt.sign(
      { id: owner.id, first_name: owner.first_name, last_name: owner.last_name, email: owner.email, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );


     // ✅ Set JWT in cookie
     cookies().set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });

    return NextResponse.json({
      message: "Login successful",
      token,
      user: { id: owner.id, first_name: owner.name, last_name: owner.last_name, email: owner.email },
    });
  } catch (error) {
    console.error(error);
    
    return NextResponse.json({ message: "OTP verification error", error: error.message }, { status: 500 });
  }
}
