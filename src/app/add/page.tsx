'use client';
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function AddPage() {
    const [postContent, setPostContent] = useState("");

    const handleCheck = () => {
        alert("Checking grammar with Gemini... (Demo)");
    };

    const handlePost = () => {
        alert("Post added to home page! (Demo)");
    };

    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 pl-3 border-green-500">
                    Add Your Post
                </h2>

                <textarea
                    className="w-full h-48 p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none text-gray-700"
                    placeholder="Write your blog here..."
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                ></textarea>

                <div className="flex justify-end gap-4 mt-4">
                    <button
                        className="px-5 py-2 text-sm bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                        onClick={handleCheck}
                    >
                        Check
                    </button>
                    <button
                        className="px-5 py-2 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                        onClick={handlePost}
                    >
                        Post
                    </button>
                </div>
            </div>
        </>
    );
}
