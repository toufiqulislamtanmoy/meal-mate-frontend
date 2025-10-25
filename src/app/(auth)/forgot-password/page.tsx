"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AuthForm from "@/components/Form/AuthForm";

const forgotPasswordSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      // Example: call your password reset API
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setError("root", { type: "manual", message: "Failed to send reset link" });
      } else {
        alert("Password reset link sent to your email!");
      }
    } catch (err: unknown) {
      setError("root", {
        type: "manual",
        message: err instanceof Error ? err.message : "Something went wrong",
      });
    }
  };

  const fields = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your registered email",
      register: register("email"),
      error: errors.email?.message,
    },
  ];

  return (
    <AuthForm
      title="Forgot Password"
      fields={fields}
      onSubmit={handleSubmit(onSubmit)}
      buttonText={isSubmitting ? "Sending..." : "Send Reset Link"}
      disabled={isSubmitting}
      errorMessage={errors.root?.message}
    />
  );
}
