import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Types
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

interface CreateUserData {
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
}

// Example API functions (replace with your actual API endpoints)
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const fetchUserById = async (id: string): Promise<User> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Custom hooks using React Query
export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};

export const useUser = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserById(id),
    enabled: !!id, // Only run query if id is provided
  });
};

// Example mutation hook
export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userData: CreateUserData): Promise<User> => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch users query
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
