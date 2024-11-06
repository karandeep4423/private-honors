import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/modal/userSchema";

export async function POST(req: NextRequest): Promise<NextResponse> {
  await dbConnect();

  try {
    const { token, password } = await req.json();
    // Find the user with the valid reset token and check expiration
    const user = await UserModel.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        {
          status: false,
          message: "Invalid or expired reset token",
        },
        { status: 400 }
      );
    }

    // Hash the new password and update the user's password
    const hashedPassword = await bcrypt.hash(password, 12);
    user.password = hashedPassword;

    // Clear the reset token and expiration
    user.resetPasswordToken = undefined as any;
    user.resetPasswordExpiresAt = undefined as any;

    await user.save();

    return NextResponse.json(
      {
        status: true,
        message: "Password has been reset successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: false,
        message: "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
