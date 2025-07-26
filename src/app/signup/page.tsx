'use client';
import Link from "next/link";

export default function Signup() {
    return (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Sign Up</h2>
            <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-3" />
            <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-3" />
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Sign Up</button>
            <p className="text-sm mt-4">Already have an account? <Link href="/" className="text-blue-600 underline">Login here</Link></p>
        </div>
    );
}
