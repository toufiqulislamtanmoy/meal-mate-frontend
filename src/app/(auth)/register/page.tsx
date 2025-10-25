"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/Form/AuthForm";
import { signIn } from "next-auth/react";
import { UseFormRegisterReturn } from "react-hook-form";

// ✅ Validation schema
const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(1, "Confirm password is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      // Example: you can call your API to register the user
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setError("root", { type: "manual", message: "Registration failed" });
      } else {
        // Optionally auto-login
        await signIn("credentials", { email: data.email, password: data.password, redirect: false });
        router.push("/");
      }
    } catch (err: unknown) {
      setError("root", {
        type: "manual",
        message: err instanceof Error ? err.message : "Something went wrong",
      });
    }
  };

  const fields = [
    { label: "Name", name: "name", placeholder: "Enter your full name", register: register("name"), error: errors.name?.message },
    { label: "Email", name: "email", type: "email", placeholder: "Enter your email", register: register("email"), error: errors.email?.message },
    { label: "Password", name: "password", type: "password", placeholder: "Enter password", register: register("password"), error: errors.password?.message },
    { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "Confirm password", register: register("confirmPassword"), error: errors.confirmPassword?.message },
  ];

  return (
    <AuthForm
      title="Register"
      fields={fields}
      onSubmit={handleSubmit(onSubmit)}
      buttonText={isSubmitting ? "Registering..." : "Register"}
      disabled={isSubmitting}
      errorMessage={errors.root?.message}
    />
  );
}
