"use client";

import { useState, useEffect } from "react";
import api from "@/components/api";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import toast from "react-hot-toast";

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
        toast.success("Blog posted successfully!");
        router.push("/home");
      } else {
        toast.error("Failed to post blog. Please try again.");
      }
    } catch (err) {
      console.error("Post failed", err);
      toast.error("Internal Problem. Please try again later.");
    }
  };

  const handleCheckGrammar = async () => {
    const sessionToken = sessionStorage.getItem("token");
    try {
      const res = await api.post(
        "/user/checkGrammar",
        { content },
        {
          headers: {
            authorization: `Bearer ${sessionToken}`,
          },
        }
      );
      if (res.data.success) {
        setContent(res.data?.corrected || "");
        toast.success(
          "Your written content is corrected, Please check it out!"
        );
      } else {
        toast.error(res.data.message || "Grammar errors found.");
      }
    } catch (err) {
      toast.error("Failed to check grammar.");
      console.error("Grammar check error:", err);
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
          onClick={handleCheckGrammar}
          className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-400 mb-2"
        >
          Correct Grammar
        </button>
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
