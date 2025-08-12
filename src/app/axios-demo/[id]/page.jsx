"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => setPost(res.data))
        .catch((err) => console.error("GET single post error:", err));
    }
  }, [id]);

  if (!post) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.body}</p>

      <Link href="/axios-demo">
        <Button variant="outline">← Back to posts</Button>
      </Link>
    </div>
  );
}
