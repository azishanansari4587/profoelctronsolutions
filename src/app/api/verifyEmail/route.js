import connection from "@/lib/connection";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
      const { email, otp } = await req.json();
  
      const db = await connection();


      const [rows] = await db.execute(
        "SELECT * FROM admin WHERE email = ? AND otp = ? AND otpExpires > UNIX_TIMESTAMP()",
        [email, otp]
      );
  
      if (rows.length === 0) {
        return NextResponse.json({ message: "Invalid or expired OTP" }, { status: 400 });
      }

      await db.execute(
        "UPDATE admin SET is_verified = true, otp = NULL, otpExpires = NULL WHERE email = ?",
        [email]
      );
      
      return NextResponse.json({ message: "Email verified successfully." });
      
    } catch (error) {
      console.error("VERIFY OTP ERROR:", error);
      return NextResponse.json({ message: "Error", error: error.message }, { status: 500 });
    }
  }
  