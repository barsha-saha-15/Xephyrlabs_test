'use client';
import Link from "next/link";

export default function Signin() {
  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-3" />
      <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-3" />
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login here</button>
      <p className="text-sm mt-4">No account? <Link href="/signup" className="text-blue-600 underline">Sign up here</Link></p>
    </div>
  );
}