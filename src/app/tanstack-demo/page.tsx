"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { usePosts, useCreatePost } from "../../../hooks/usePosts";

export default function TanStackDemo() {
  const { data: posts, isLoading, isError, error } = usePosts();
  const createPostMutation = useCreatePost();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createPostMutation.mutate(
      { title, body, userId: 1 },
      {
        onSuccess: () => {
          setTitle("");
          setBody("");
          alert("Post created");
        },
        onError: (err) => {
          console.error("POST error:", err);
        },
      }
    );
  };

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">TanStack Query Demo: GET & POST</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          required
        />
        <Textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Post body"
          required
        />
        <Button type="submit" disabled={createPostMutation.isPending}>
          {createPostMutation.isPending ? "Creating..." : "Create Post"}
        </Button>
      </form>

      <div className="space-y-4">
        {posts?.map((p) => (
          <Card key={p.id}>
            <CardContent className="p-4">
              <Link href={`/axios-demo/${p.id}`}>
                <h2 className="font-semibold hover:underline cursor-pointer">
                  {p.title}
                </h2>
              </Link>
              <p>{p.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
