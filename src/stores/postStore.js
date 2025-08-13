import { create } from "zustand";

const usePostStore = create((set) => ({
  posts: [],
  fetchPosts: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    set({ posts: data.slice(0, 5) });
  },
}));

