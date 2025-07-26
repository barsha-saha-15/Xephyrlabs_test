'use client';
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function HomePage() {
    const router = useRouter();

    const handleDelete = (id: number) => {
        alert(`Post with ID ${id} deleted!`);
    };

    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 pl-3 border-blue-500">
                    Your All Posts
                </h2>

                {[1, 2].map((_, i) => (
                    <div
                        key={i}
                        className="bg-white p-4 md:p-6 rounded-2xl shadow-md mb-6 border border-gray-100 transition hover:shadow-lg"
                    >
                        <p className="mb-4 text-gray-700 leading-relaxed">
                            This is a sample blog post content.
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                className="px-4 py-1.5 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                                onClick={() => router.push('/update')}
                            >
                                Update
                            </button>
                            <button
                                className="px-4 py-1.5 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                onClick={() => handleDelete(i)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}




