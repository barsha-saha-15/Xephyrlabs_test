"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import api from "@/components/api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface post {
  id: string;
  content: string;
  createdAt: string;
  user: {
    email: string;
  };
}
export default function ShowcasePage() {
  const [posts, setPosts] = useState<post[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) {
          router.push("/login");
          return;
        }
        const res = await api.get("/user/allPost", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        if (res.data.success) {
          setPosts(res.data.posts);
        } else {
          toast.error("failed to fetch posts");
        }
      } catch (error) {
        toast.error("error fetching posts");
        console.error(error);
      }
    };
    fetchPosts();
  }, [router]);

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 pl-3 border-purple-500">
          All Blogs
        </h2>

        {posts.length === 0 ? (
          <p className="text-gray-500">No posts available.</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-5 md:p-6 rounded-2xl shadow-md mb-6 border border-gray-100 transition hover:shadow-lg"
            >
              <p className="mb-2 text-sm text-gray-500">
                {post.user.email} posted at{" "}
                {new Date(post.createdAt).toISOString().split("T")[0]}
              </p>
              <p className="text-gray-700 leading-relaxed">{post.content}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
