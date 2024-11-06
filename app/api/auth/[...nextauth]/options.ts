import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/modal/userSchema";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        await dbConnect();
        try {
          const user = await UserModel.findOne({
            email: credentials.email,
          });

          if (!user) {
            throw new Error("No user found with this email!");
          }
  
          // if account exist and not verified resend verification email
          if (!user.isVerified) {
            const verificationCode = Math.floor(
              100000 + Math.random() * 900000
            ).toString();
            user.verifyCode = verificationCode;
            user.verifyCodeExpiry = new Date(Date.now() + 3600000);
            await user.save();

            // Send verification email
            const emailResponse = await sendVerificationEmail(
              user.email,
              user.firstName,
              verificationCode,
              user._id as string
            );
            if (!emailResponse.success) {
              return new Response(
                JSON.stringify({
                  success: false,
                  message: emailResponse.message,
                }),
                { status: 500 }
              );
            }

            throw new Error(
              "Account Not verified! A Verification Email was Sent!"
            );
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error("Incorrect password!");
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString(); // Convert ObjectId to string
        token.isVerified = user.isVerified;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.isVerified = token.isVerified;
        session.user.username = token.username;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signIn: "auth/sign-in",
  },
};
