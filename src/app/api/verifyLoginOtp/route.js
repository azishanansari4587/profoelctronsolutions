// app/api/auth/verifyLoginOtp/route.js
import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";
import connection from "@/lib/connection";
// import { cookies } from "next/headers";
import { generateToken } from "@/lib/generateToken";



// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { email, otp } = body;

//     const db = await connection();

//     const [rows] = await db.execute(
//       "SELECT * FROM admin WHERE email = ? AND otp = ? AND otpExpires > NOW()",
//       [email, otp]
//     );

//     const owner = rows[0];

//     if (!owner) {
//       return NextResponse.json({ message: "Invalid or expired OTP" }, { status: 400 });
//     }

//     await db.execute("UPDATE admin SET otp = NULL, otpExpires = NULL WHERE email = ?", [email]);

//     // const token = jwt.sign(
//     //   { id: owner.id, first_name: owner.first_name, last_name: owner.last_name, email: owner.email, role: "admin" },
//     //   process.env.JWT_SECRET,
//     //   { expiresIn: "7d" }
//     // );


//     //  // ✅ Set JWT in cookie
//     //  cookies().set("token", token, {
//     //     httpOnly: true,
//     //     secure: process.env.NODE_ENV === "production",
//     //     maxAge: 60 * 60 * 24, // 1 day
//     //     path: "/",
//     //   });

//     const token = generateToken(owner.id, owner.first_name, owner.last_name, owner.email);

//     return NextResponse.json({
//       message: "Login successful",
//       token,
//       user: { id: owner.id, first_name: owner.first_name, last_name: owner.last_name, email: owner.email },
//     });
//   } catch (error) {
//     console.error(error);
    
//     return NextResponse.json({ message: "OTP verification error", error: error.message }, { status: 500 });
//   }
// }


export async function POST(req) {
  try {
    const body = await req.json();
    const { email, otp } = body;

    const db = await connection();

    console.log("💬 Email received:", email);
    console.log("💬 OTP received:", otp);

    const [rows] = await db.execute(
      "SELECT * FROM admin WHERE email = ? AND otp = ? AND otpExpires > NOW()",
      [email, otp]
    );

    console.log("📦 Query Result Rows:", rows);

    if (rows.length === 0) {
      // Try without otpExpires just to debug:
      const [testRows] = await db.execute(
        "SELECT * FROM admin WHERE email = ? AND otp = ?",
        [email, otp]
      );
      console.log("🧪 Debug Without otpExpires:", testRows);

      if (testRows.length > 0) {
        return NextResponse.json({ message: "OTP found but expired" }, { status: 400 });
      } else {
        return NextResponse.json({ message: "Invalid OTP or Email" }, { status: 400 });
      }
    }

    const owner = rows[0];

    await db.execute("UPDATE admin SET otp = NULL, otpExpires = NULL WHERE email = ?", [email]);

    const token = generateToken(owner.id, owner.first_name, owner.last_name, owner.email);

    return NextResponse.json({
      message: "Login successful",
      token,
      user: {
        id: owner.id,
        first_name: owner.first_name,
        last_name: owner.last_name,
        email: owner.email
      },
    });
  } catch (error) {
    console.error("❌ Error verifying OTP:", error);
    return NextResponse.json({ message: "OTP verification error", error: error.message }, { status: 500 });
  }
}

