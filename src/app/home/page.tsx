"use client";

import { useEffect, useState } from "react";
import api from "@/components/api";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import toast from "react-hot-toast";

interface Blog {
  id: string;
  content: string;
  createdAt: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      router.push("/");
    } else {
      fetchPosts();
    }
  }, []);

  const fetchPosts = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const res = await api.get("/user/home", {
        headers: { authorization: `Bearer ${token}` },
      });

      if (res.data.success) {
        setPosts(res.data.posts);
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
      toast.error("Posts could not be fetched. Please try again later.");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const token = sessionStorage.getItem("token");
      await api.delete(`/user/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setPosts((prev) => prev.filter((post) => post.id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleUpdate = (id: string) => {
    router.push(`/update/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-3xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 pl-3 border-purple-500">
          My Blogs
        </h2>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts yet.</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md p-5 mb-6 border"
            >
              <p className="text-gray-800 mb-4 whitespace-pre-line">
                {post.content}
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => handleUpdate(post.id)}
                  className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
