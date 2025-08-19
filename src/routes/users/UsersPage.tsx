import { useState } from "react";
import { useUsers, useCreateUser } from "@/hooks/useApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Users, Plus } from "lucide-react";
import { Link } from "react-router";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function UsersPage() {
  const { data: users, isLoading, error, refetch } = useUsers();
  const createUserMutation = useCreateUser();

  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUser.name || !newUser.username || !newUser.email) return;

    try {
      await createUserMutation.mutateAsync(newUser);
      setNewUser({ name: "", username: "", email: "" });
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <Users className="h-8 w-8" />
            Users Demo
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Demonstrating React Query with data fetching and mutations
          </p>
        </div>

        {/* Create User Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Create New User
            </CardTitle>
            <CardDescription>
              Add a new user using React Query mutations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateUser} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  placeholder="Full Name"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                />
                <Input
                  placeholder="Username"
                  value={newUser.username}
                  onChange={(e) =>
                    setNewUser({ ...newUser, username: e.target.value })
                  }
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
              </div>
              <Button
                type="submit"
                disabled={createUserMutation.isPending}
                className="w-full md:w-auto"
              >
                {createUserMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create User"
                )}
              </Button>
            </form>

            {createUserMutation.isError && (
              <Alert className="mt-4" variant="destructive">
                <AlertDescription>
                  Failed to create user. Please try again.
                </AlertDescription>
              </Alert>
            )}

            {createUserMutation.isSuccess && (
              <Alert className="mt-4">
                <AlertDescription>User created successfully!</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Users List */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Users List</CardTitle>
              <CardDescription>Data fetched using React Query</CardDescription>
            </div>
            <Button
              variant="outline"
              onClick={() => refetch()}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Refresh"
              )}
            </Button>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin" />
                <span className="ml-2">Loading users...</span>
              </div>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertDescription>
                  Error loading users: {error.message}
                </AlertDescription>
              </Alert>
            )}

            {users && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user: User) => (
                  <Card key={user.id} className="p-4">
                    <h3 className="font-semibold text-lg">{user.name}</h3>
                    <p className="text-gray-600">@{user.username}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <p className="text-sm text-gray-500">{user.phone}</p>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center">
          <div className="flex gap-4 justify-center">
            <Link to="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline">View Components</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
