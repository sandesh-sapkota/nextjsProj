"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await api.get<Post[]>("/posts?_limit=5");
  return data;
};

export function usePosts() {
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
}

const createPost = async (newPost: Omit<Post, "id">): Promise<Post> => {
  const { data } = await api.post<Post>("/posts", newPost);
  return data;
};

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation<Post, Error, Omit<Post, "id">>({
    mutationFn: createPost,
    onSuccess: (data: Post) => {
      queryClient.setQueryData<Post[]>(["posts"], (old) =>
        old ? [data, ...old] : [data]
      );
    },
  });
}
