import mongoose, { Document, Schema } from "mongoose";

// Define User interface
export interface User extends Document {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  address: string;
  postalCode: string;
  country: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
}

// Updated User schema
const UserSchema: Schema<User> = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^(0|\+33)[1-9]\d{8}$/, "Please enter a valid phone number"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  postalCode: {
    type: String,
    required: [true, "Postal code is required"],
    match: [/^\d{5}$/, "Please enter a valid postal code"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please use a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifyCode: {
    type: String,
    required: [true, "Verify Code is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify Code Expiry is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
