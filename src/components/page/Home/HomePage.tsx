"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Personal Website Manager
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A private dashboard to manage all aspects of your personal website.
        </p>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium"
          onClick={() => router.push("/login")}
        >
          Login to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
