"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold">Personal Dashboard</h1>
          <p className="mt-2 text-gray-600">Login to manage your website</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
