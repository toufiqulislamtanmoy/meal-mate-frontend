"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"
import AuthForm from "@/components/Form/AuthForm"
import { signIn } from "next-auth/react"

const registerSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type RegisterFormData = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const router = useRouter()

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
  })

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        setError("root", { type: "manual", message: "Registration failed" })
      } else {
        await signIn("credentials", { email: data.email, password: data.password, redirect: false })
        router.push("/")
      }
    } catch (err: unknown) {
      setError("root", {
        type: "manual",
        message: err instanceof Error ? err.message : "Something went wrong",
      })
    }
  }

  const fields = [
    {
      label: "Full Name",
      name: "name",
      placeholder: "Enter your full name",
      register: register("name"),
      error: errors.name?.message,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      register: register("email"),
      error: errors.email?.message,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Create a password",
      register: register("password"),
      error: errors.password?.message,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm your password",
      register: register("confirmPassword"),
      error: errors.confirmPassword?.message,
    },
  ]

  return (
    <AuthForm
      title="Create Account"
      subtitle="Join Family Meal today"
      fields={fields}
      onSubmit={handleSubmit(onSubmit)}
      buttonText={isSubmitting ? "Creating account..." : "Register"}
      disabled={isSubmitting}
      errorMessage={errors.root?.message}
      heroTitle="Start Managing Your Family Meals"
      heroSubtitle="Create an account to plan meals, calculate expenses, and organize family dinners together."
    />
  )
}
