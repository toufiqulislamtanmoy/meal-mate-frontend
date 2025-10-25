"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AuthForm from "@/components/Form/AuthForm";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await signIn("credentials", { email: data.email, password: data.password, redirect: false });
      if (res?.error) setError("root", { type: "manual", message: "Invalid email or password" });
      else router.push("/");
    } catch (err) {
      setError("root", { type: "manual", message: err instanceof Error ? err.message : "Something went wrong" });
    }
  };

  const fields = [
    { label: "Email", name: "email", type: "email", placeholder: "Enter your email", register: register("email"), error: errors.email?.message },
    { label: "Password", name: "password", type: "password", placeholder: "Enter your password", register: register("password"), error: errors.password?.message },
  ];

  return (
    <AuthForm
      title="Login"
      fields={fields}
      onSubmit={handleSubmit(onSubmit)}
      buttonText={isSubmitting ? "Signing in..." : "Login"}
      errorMessage={errors.root?.message}
      disabled={isSubmitting}
      extraLink={{ text: "Don't have an account? Register", href: "/register" }}
    />
  );
}
