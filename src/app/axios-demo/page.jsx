"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

function AxiosDemo() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("GET error:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { title, body, userId: 1 };

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        payload
      );
      setPosts((prev) => [res.data, ...prev]);
      setTitle("");
      setBody("");
      alert("Post created");
    } catch (err) {
      console.error("POST error:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Axios Demo : GET & POST</h1>

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
        <Button type="submit">Create Post</Button>
      </form>

      <div className="space-y-4">
        {posts.map((p) => (
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
export default AxiosDemo;
