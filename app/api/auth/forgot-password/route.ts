import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { sendPasswordResetEmail } from "@/helpers/sendVerificationEmail";
import UserModel from "@/modal/userSchema";
import dbConnect from "@/lib/dbConnect";

export async function POST(req: NextRequest): Promise<NextResponse> {
  await dbConnect();
  try {
    const { email } = (await req.json()) as { email: string };

    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          status: false,
          message: "User not found with this email",
        },
        { status: 404 }
      );
    }

    // Generate a reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = (Date.now() + 3600000) as any; // Token expires in 1 hour

    await user.save();

    // Create a password reset URL
    const resetUrl = `${process.env.URL}/auth/reset-password/${resetToken}`;

    // Send password reset email
    await sendPasswordResetEmail(user.email, resetUrl);

    return NextResponse.json(
      {
        status: true,
        message: "Password reset link sent to your email!",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: false,
        message: "Error sending reset password link",
      },
      { status: 500 }
    );
  }
}
