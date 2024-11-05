"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import * as z from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Define Zod schema with additional fields
const RegisterSchema = z.object({
  email: z.string().email("Invalid email format"),
  firstName: z
    .string()
    .min(2, "Au moins 2 caractères requis")
    .max(50, "Max 50 caractères autorisés")
    .regex(/^[a-zA-Z]+$/, "Seuls les caractères alphabétiques sont autorisés"),
  lastName: z
    .string()
    .min(2, "Au moins 2 caractères requis")
    .max(50, "Max 50 caractères autorisés")
    .regex(/^[a-zA-Z]+$/, "Seuls les caractères alphabétiques sont autorisés"),
  phone: z.string().regex(/^(0|\+33)[1-9]\d{8}$/, "Invalid phone format"),
  city: z.string().min(2, "City name is too short"),
  address: z.string().min(5, "Address is too short"),
  postalCode: z.string().regex(/^\d{5}$/, "Invalid postal code format"),
  country: z.string().min(2, "Country name is too short"),
  password: z
    .string()
    .min(8, "Le mot de passe doit comporter au moins 8 caractères"),
});

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    address: "",
    postalCode: "",
    country: "",
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof formData, string[]>>
  >({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value.trim() });
  };

  const handleRegister = async () => {
    const validation = RegisterSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof typeof formData, string[]>> = {};
      validation.error.errors.forEach((err) => {
        const fieldName = err.path[0] as keyof typeof formData;
        fieldErrors[fieldName] = fieldErrors[fieldName]
          ? [...fieldErrors[fieldName], err.message]
          : [err.message];
      });
      setErrors(fieldErrors);
      toast.error("Le formulaire n'est pas valide");
      return;
    }

    setErrors({});
    setLoader(true);

    try {
      const result = await axios.post("/api/sign-up", formData);
      toast.success("Le lien de vérification par e-mail a été envoyé !");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        city: "",
        address: "",
        postalCode: "",
        country: "",
        password: "",
        email: "",
      });
    } catch (err: any) {
      toast.error(err.response?.data?.message || "An error occurred");
    } finally {
      setLoader(false);
      router.replace("/auth/verify-code");
    }
  };

  return (
    <div className="py-10 min-h-screen flex items-center justify-center bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* First Name Field */}
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.firstName ? "border-red-500" : ""
              }`}
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs italic">
                {errors.firstName.join(", ")}
              </p>
            )}
          </div>

          {/* Last Name Field */}
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Last Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.lastName ? "border-red-500" : ""
              }`}
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs italic">
                {errors.lastName.join(", ")}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.phone ? "border-red-500" : ""
              }`}
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic">
                {errors.phone.join(", ")}
              </p>
            )}
          </div>

          {/* City Field */}
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              City
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.city ? "border-red-500" : ""
              }`}
              id="city"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
            />
            {errors.city && (
              <p className="text-red-500 text-xs italic">
                {errors.city.join(", ")}
              </p>
            )}
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Address
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.address ? "border-red-500" : ""
              }`}
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
            />
            {errors.address && (
              <p className="text-red-500 text-xs italic">
                {errors.address.join(", ")}
              </p>
            )}
          </div>

          {/* Postal Code Field */}
          <div className="mb-4">
            <label
              htmlFor="postalCode"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Postal Code
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.postalCode ? "border-red-500" : ""
              }`}
              id="postalCode"
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Enter postal code"
            />
            {errors.postalCode && (
              <p className="text-red-500 text-xs italic">
                {errors.postalCode.join(", ")}
              </p>
            )}
          </div>

          {/* Country Field */}
          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Country
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.country ? "border-red-500" : ""
              }`}
              id="country"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter country"
            />
            {errors.country && (
              <p className="text-red-500 text-xs italic">
                {errors.country.join(", ")}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.join(", ")}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password ? "border-red-500" : ""
              }`}
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.join(", ")}
              </p>
            )}
          </div>

          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleRegister}
          >
            {loader ? "Loading..." : "Register"}
          </button>
          <div className="my-4 grid grid-cols-3 items-center text-black">
            <hr className="border-black" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-black" />
          </div>
          <Link href="/auth/sign-in" passHref>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login Here
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
