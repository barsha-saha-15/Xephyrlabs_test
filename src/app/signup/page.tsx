"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/components/api";
import toast from "react-hot-toast";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    try {
      const res = await api.post("/auth/register", { email, password });
      if (res.data.success) {
        toast.success("Signup successful.");
        router.push("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Signup failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-2">BlogPoint</h1>
      <p className="text-gray-500 mb-8 text-sm">Create your account</p>

      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Sign Up
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSignup}
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
        >
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => router.push("/")}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}
