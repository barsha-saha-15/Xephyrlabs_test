'use client';
import Link from "next/link";

export default function Signup() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-left">Create an Account</h2>
                <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg mb-4" />
                <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg mb-4" />
                <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200">Sign Up</button>
                <p className="text-sm text-center mt-4">Already have an account? <Link href="/" className="text-blue-600 underline">Login here</Link></p>
            </div>
        </div>
    );
}
