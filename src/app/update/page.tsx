"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function UpdatePage() {
  const [postContent, setPostContent] = useState(
    "This is the original blog content..."
  );

  const handleCheck = () => {
    alert("Gemini grammar checking in progress... (Demo)");
  };

  const handleUpdate = () => {
    alert("Post updated successfully! (Demo)");
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 pl-3 border-blue-500">
          Update Your Post
        </h2>

        <textarea
          className="w-full h-48 p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none text-gray-700"
          placeholder="Edit your blog here..."
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>

        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={handleCheck}
            className="px-5 py-2 text-sm bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
          >
            Check
          </button>
          <button
            onClick={handleUpdate}
            className="px-5 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}
