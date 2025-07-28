"use client";

import { useState, useEffect } from "react";
import api from "@/components/api";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function AddPage() {
  const [content, setContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedtoken = sessionStorage.getItem("token");
    if (!storedtoken) {
      router.push("/");
    }
  }, [router]);

  const handlePost = async () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      console.error("No token found in sessionStorage");
      return;
    }

    try {
      const res = await api.post(
        "/user/add",
        { content },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        alert("Blog posted successfully!");
        router.push("/home");
      } else {
        alert("Failed to post blog. Please try again.");
      }
    } catch (err) {
      console.error("Post failed", err);
      alert("Internal Problem. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Your Blog</h2>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-40 p-3 border border-gray-300 rounded-md mb-4 resize-none"
          placeholder="Write your blog here..."
        />
        <button
          onClick={handlePost}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Post
        </button>
      </div>
    </div>
  );
}
