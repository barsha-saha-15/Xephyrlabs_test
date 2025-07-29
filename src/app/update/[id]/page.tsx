"use client";

import api from "@/components/api";
import Navbar from "@/components/Navbar";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function UpdatePage() {
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("token");

    if (!sessionToken) {
      router.push("/");
      return;
    }

    if (!id) {
      setError("Post ID not found in URL");
      setLoading(false);
      return;
    }

    const fetchPost = async () => {
      try {
        const res = await api.get(`/user/singlePost/${id}`, {
          headers: {
            authorization: `Bearer ${sessionToken}`,
          },
        });
        setContent(res.data.post?.content || "");
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to load post data");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, router]);

  const handleUpdate = async () => {
    const sessionToken = sessionStorage.getItem("token"); // use the same key as in fetch

    try {
      const res = await api.put(
        `/user/update/${id}`,
        { content },
        {
          headers: {
            authorization: `Bearer ${sessionToken}`,
          },
        }
      );

      if (res.data.success) {
        toast.success("Post updated successfully");
        router.replace("/home");
      }
    } catch (err) {
      console.error("Error updating post:", err);
      setError("Failed to update post");
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
        <p className="mb-2 font-semibold text-lg">Update Your Blog</p>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <textarea
              placeholder="Update your content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border p-2 w-full mb-2 rounded h-40 resize-none"
            />
            <button
              onClick={handleCheckGrammar}
              className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-400 mb-2"
            >
              Correct Grammar
            </button>
            <button
              onClick={handleUpdate}
              className="bg-blue-600 w-full text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Update
            </button>
          </>
        )}
      </div>
    </div>
  );
}
