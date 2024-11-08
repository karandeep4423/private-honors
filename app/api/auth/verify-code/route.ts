import dbConnect from "@/lib/dbConnect";
import UserModel from "@/modal/userSchema";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { id, code } = await request.json();
    const user = await UserModel.findOne({ _id: id });

    if (!user) {
      return Response.json(
        { success: false, message: "User not found with this code!" },
        { status: 404 }
      );
    }
    if (user.isVerified) {
      return Response.json(
        { success: false, message: "User is already verified!" },
        { status: 404 }
      );
    }

    // Validate the code and its expiration
    const isCodeValid = user.verifyCode === code;
    const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();

    if (isCodeValid && isCodeNotExpired) {
      user.isVerified = true;
      await user.save();

      return Response.json(
        { success: true, message: "Account verified successfully" },
        { status: 200 }
      );
    } else if (!isCodeNotExpired) {
      return Response.json(
        { success: false, message: "Verification code has expired." },
        { status: 400 }
      );
    } else {
      return Response.json(
        { success: false, message: "Incorrect verification code" },
        { status: 400 }
      );
    }
  } catch (error) {
    return Response.json(
      { success: false, message: "Error verifying user" },
      { status: 500 }
    );
  }
}
