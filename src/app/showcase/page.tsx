'use client';
import Navbar from "@/components/Navbar";

export default function ShowcasePage() {
    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 pl-3 border-purple-500">
                    All Blogs
                </h2>

                {[1, 2].map((_, i) => (
                    <div
                        key={i}
                        className="bg-white p-5 md:p-6 rounded-2xl shadow-md mb-6 border border-gray-100 transition hover:shadow-lg"
                    >
                        <p className="mb-2 text-sm text-gray-500">
                            User {i + 1} posted at {i === 0 ? '09-03-2025' : '12-07-2025'}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            This is a sample blog content posted by a user.
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}
