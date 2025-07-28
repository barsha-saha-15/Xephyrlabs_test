"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    sessionStorage.clear();
    router.push("/");
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center mb-4">
      <h1 className="text-xl font-bold text-blue-600">BlogPoint</h1>
      <div className="space-x-4 text-sm md:text-base">
        <Link href="/home" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/add" className="hover:text-blue-600">
          Add
        </Link>
        <Link href="/showcase" className="hover:text-blue-600">
          Showcase
        </Link>
        <Link href="#" onClick={handleLogout} className="hover:text-red-500">
          Logout
        </Link>
      </div>
    </nav>
  );
}
