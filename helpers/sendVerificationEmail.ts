import nodemailer, { Transporter } from "nodemailer";

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async (
  to: string,
  subject: string,
  html: string
): Promise<{ success: boolean; message: string }> => {
  const transporter: Transporter = nodemailer.createTransport({
    // service: "gmail",
    host: process.env.MAIL_SMTP_HOST,
    port: parseInt(process.env.MAIL_SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PWD,
    },
  });
  const mailOptions: MailOptions = {
    from: process.env.MAIL_SENDER || "",
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Verification email sent successfully." };
  } catch (error) {
    return { success: false, message: "Failed to send verification email." };
  }
};

export const sendVerificationEmail = async (
  to: string,
  firstName: string,
  verifyCode: string,
  id: string
): Promise<{ success: boolean; message: string }> => {
  const mailHtml = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Verification</title>
        </head>
       <body>
    <h1>Hello ${firstName}</h1>
    <p>Here's your verification code: <strong>${verifyCode}</strong></p>
    <button>
        <a href="${process.env.URL}/auth/verify-code/${id}" style="text-decoration: none; color: white;">Click here to verify your code</a>
    </button>
    <p>
        Thank you for registering. Please use the following verification code to complete your registration:
    </p>
</body>
        </html>
    `;

  try {
    const response = await sendEmail(to, "Email de Verification", mailHtml);
    return response; // Return the response from sendEmail, which includes success and message
  } catch (error: unknown) {
    return { success: false, message: "Failed to send verification email." };
  }
};

export const sendPasswordResetEmail = async (
  to: string,
  resetUrl: string
): Promise<void> => {
  const mailHtml = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Reset Password</title>
        </head>
       <body>
    <p>Click below link to reset your password.</p>
    <button style="text-decoration: none; color: white;">
        <a href="${resetUrl}" >Click here to reset your password</a>
    </button>
</body>
        </html>
    `;

  try {
    await sendEmail(to, "Password Reset Request", mailHtml);
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};
