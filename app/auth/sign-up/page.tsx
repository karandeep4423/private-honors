"use client"
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import * as z from "zod";
import { useState } from "react";

// Define Zod schema
const RegisterSchema = z.object({
  email: z.string().email("Invalid email format"),
  firstname: z
    .string()
    .min(2, "Au moins 2 caractères requis")
    .max(50, "Max 50 caractères autorisés")
    .regex(/^[a-zA-Z]+$/, "Seuls les caractères alphabétiques sont autorisés"),
  lastname: z
    .string()
    .min(2, "Au moins 2 caractères requis")
    .max(50, "Max 50 caractères autorisés")
    .regex(/^[a-zA-Z]+$/, "Seuls les caractères alphabétiques sont autorisés"),
  phone: z.string().regex(/^(0|\+33)[1-9]\d{8}$/, "Invalid phone format"),
  gender: z.enum(["monsieur", "Monsieur", "madame", "Madame"], {
    errorMap: () => ({ message: "Ce n'est pas un sexe valide !" }),
  }),
  password: z
    .string()
    .min(8, "Le mot de passe doit comporter au moins 8 caractères"),
});

const RegisterForm: React.FC = () => {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    gender: "",
    password: "",
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
          ? [...fieldErrors[fieldName]!, err.message]
          : [err.message];
      });
      setErrors(fieldErrors);
      toast.error("Le formulaire n'est pas valide");
      return;
    }

    setErrors({});
    setLoader(true);

    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signup`,
        formData
      );
      // Ensure setUserData is properly imported and defined, or remove if unnecessary
      // setUserData?.(result.data.user);
      toast.success("Le lien de vérification par e-mail a été envoyé !");
      setFormData({
        email: "",
        firstname: "",
        lastname: "",
        phone: "",
        gender: "",
        password: "",
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "An error occurred");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="py-10 min-h-screen flex items-center justify-center bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Registre</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`shadow bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              id="email"
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && errors.email.length > 0 && (
              <p className="text-red-500 text-xs italic">
                {errors.email.join(", ")}
              </p>
            )}
          </div>

          {/* Add similar input fields for firstname, lastname, phone, gender, password following the same pattern */}

          <div className="flex items-center justify-between">
            {loader ? (
              <p>Loading...</p>
            ) : (
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleRegister}
              >
                Register
              </button>
            )}
          </div>

          <div className="my-4 grid grid-cols-3 items-center text-black">
            <hr className="border-black" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-black" />
          </div>

          <Link href="/login" passHref>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Login Here
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
