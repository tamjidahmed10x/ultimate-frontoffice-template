import { Card } from "antd";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 mb-6">
            This page showcases shadcn/ui components alongside Ant Design
          </p>
        </div>

        {/* Ant Design Card */}
        <Card title="Ant Design Components" className="mb-6">
          <p className="text-gray-700">
            This is a minimal React application built with Vite, TypeScript,
            Tailwind CSS, and Ant Design. It demonstrates basic routing
            functionality using React Router.
          </p>
        </Card>

        {/* shadcn/ui Alert */}
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            shadcn/ui has been successfully installed and configured in your
            project.
          </AlertDescription>
        </Alert>

        {/* shadcn/ui Card */}
        <ShadcnCard>
          <CardHeader>
            <CardTitle>shadcn/ui Components</CardTitle>
            <CardDescription>
              Beautiful and accessible components built with Radix UI and
              Tailwind CSS
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label
                htmlFor="example-input"
                className="block text-sm font-medium mb-2"
              >
                Example Input
              </label>
              <Input
                id="example-input"
                placeholder="Type something here..."
                className="w-full"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </CardContent>
        </ShadcnCard>

        <div className="text-center">
          <Link to="/">
            <Button variant="outline" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
