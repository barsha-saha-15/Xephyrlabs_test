'use client';
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white shadow p-4 flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">BlogPoint</h1>
            <div className="space-x-4">
                <Link href="/home" className="hover:text-blue-600">Home</Link>
                <Link href="/add" className="hover:text-blue-600">Add</Link>
                <Link href="/showcase" className="hover:text-blue-600">Showcase</Link>
                <Link href="/" className="hover:text-red-500">Logout</Link>
            </div>
        </nav>
    );
}