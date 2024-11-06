"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPassword: React.FC = () => {
  const router = useRouter();
  const  param = useParams<{ token: string }>();

  const [password, setPassword] = useState<string>(""); // State to store the password
  const [loader, setLoader] = useState<boolean>(false); // State to handle the loading spinner

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Password validation: Must be at least 8 characters long
    if (!password || password.length < 8) {
      toast.error("Password must be at least 8 characters long!"); // Show error toast
      return; // Exit function if validation fails
    }

    setLoader(true); // Show loader while making the request
    try {
      const response = await axios.post(`/api/auth/reset-password/`, {
        password,
        token:param?.token
      });
      toast.success(response.data.message); // Show success toast
      setPassword("");
      router.replace("/auth/sign-in");
    } catch (error: any) {
      // Handle errors and provide feedback from server
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message); // Show specific error message
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoader(false); // Always reset the loader after request completes
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Reset Password
        </h2>
        <form onSubmit={handleResetPassword}>
          {/* Password Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Enter new password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            {loader ? (
              <button
                className="w-full cursor-not-allowed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                disabled
              >
                Loading...
              </button>
            ) : (
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit" // Set to submit since it's a form
              >
                Reset Password
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
