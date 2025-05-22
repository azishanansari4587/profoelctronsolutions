import connection from "@/lib/connection";
import sendEmail from "@/lib/sendEmail";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


console.log("🔥 API route called");

export async function POST(request) {

    try {
        const { first_name, last_name, email, password } = await request.json();

        const trimmedEmail = email?.trim();
        const trimmedPassword = password?.trim();

        if(!first_name || !last_name || !trimmedEmail || !trimmedPassword ) {
            return NextResponse.json({ error: "Please fill in all Fields"}, {status: 400});
        }

        console.log("🧠 Trying to connect to DB...");
        const db = await connection();
        // Check if owner already exists
        const [ownerExists] = await db.execute("SELECT * FROM admin WHERE email = ?", [trimmedEmail]);
        if (ownerExists.length > 0) return NextResponse.json({ message: "Email already in use" }, { status: 400 });
    
        // Hash password
        const hashedPassword = await bcrypt.hash(trimmedPassword, 10);
    
        // Generate OTP for email verification
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // Expires in 10 mins
    
        // Create new owner (not verified yet)
        await db.execute("INSERT INTO admin (first_name, last_name, email, password, otp, otpExpires, is_verified) VALUES (?, ?, ?, ?, ?, ?, false)",
            [ first_name, last_name, trimmedEmail, hashedPassword, otp, otpExpires]
        );
    
        // Send OTP via Email
        await sendEmail(trimmedEmail, "Email Verification OTP", `Your OTP is ${otp}`);
    
        return NextResponse.json({ message: "Registered successfully. OTP sent to your email." }, { status: 201 });
      } catch (error) {
        console.error("Signup error:", error);
        
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}