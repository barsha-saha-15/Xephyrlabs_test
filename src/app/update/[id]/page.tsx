"use client";

import Navbar from "@/components/Navbar";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdatePage() {
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("access_key");

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
        const res = await axios.get(`http://localhost:5000/singlePost/${id}`, {
          headers: {
            authorization: `Bearer ${sessionToken}`,
          },
        });

        console.log("Fetched post:", res.data.post);
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
    const sessionToken = sessionStorage.getItem("access_key");

    try {
      const res = await axios.put(
        `http://localhost:5000/updateposts/${id}`,
        { content },
        {
          headers: {
            authorization: `Bearer ${sessionToken}`,
          },
        }
      );

      if (res.data.success) {
        router.replace("/home");
      }
    } catch (err) {
      console.error("Error updating post:", err);
      setError("Failed to update post");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto mt-16 bg-white p-6 rounded-xl shadow-md">
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
              onClick={handleUpdate}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Update
            </button>
          </>
        )}
      </div>
    </div>
  );
}

