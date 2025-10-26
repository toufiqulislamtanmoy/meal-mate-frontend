"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useSearchParams, useRouter } from "next/navigation"
import AuthForm from "@/components/Form/AuthForm"

const resetPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>

export default function ResetPasswordPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  })

  const onSubmit = async (data: ResetPasswordFormData) => {
    if (!token) {
      setError("root", { type: "manual", message: "Invalid reset link" })
      return
    }

    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password: data.password }),
      })

      if (!res.ok) {
        setError("root", { type: "manual", message: "Failed to reset password" })
      } else {
        alert("Password successfully reset!")
        router.push("/login")
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
      label: "New Password",
      name: "password",
      type: "password",
      placeholder: "Enter new password",
      register: register("password"),
      error: errors.password?.message,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm new password",
      register: register("confirmPassword"),
      error: errors.confirmPassword?.message,
    },
  ]

  return (
    <AuthForm
      title="Reset Password"
      subtitle="Create a new password for your account"
      fields={fields}
      onSubmit={handleSubmit(onSubmit)}
      buttonText={isSubmitting ? "Resetting..." : "Reset Password"}
      disabled={isSubmitting}
      errorMessage={errors.root?.message}
      heroTitle="Create a New Password"
      heroSubtitle="Enter a new password to regain access to your Family Meal account."
    />
  )
}
