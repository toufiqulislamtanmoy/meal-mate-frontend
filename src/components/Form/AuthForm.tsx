"use client";
import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FormInput from "@/components/Form/FormInput";
import type { UseFormRegisterReturn } from "react-hook-form";

interface AuthFormField {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: string;
}

interface AuthFormProps {
  title: string;
  subtitle?: string;
  fields: AuthFormField[];
  onSubmit: (e: React.FormEvent) => void;
  buttonText: string;
  disabled?: boolean;
  errorMessage?: string;
  extraLink?: { text: string; href: string };
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: string;
  showRememberMe?: boolean;
  onRememberMeChange?: (checked: boolean) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  subtitle,
  fields,
  onSubmit,
  buttonText,
  disabled,
  errorMessage,
  extraLink,
  heroTitle,
  heroSubtitle,
  onRememberMeChange,
}) => {
  const lowerTitle = title.toLowerCase();
  const isLogin = lowerTitle.includes("login");
  const isRegister = lowerTitle.includes("register");

  // Default bottom link
  let linkBelowForm: { text: string; href: string } | null = null;
  if (isLogin)
    linkBelowForm = {
      text: "Don't have an account? Register",
      href: "/register",
    };
  else if (isRegister)
    linkBelowForm = { text: "Already have an account? Login", href: "/login" };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Hero Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden flex-col justify-between p-12"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-16">
            <div className="w-12 h-12 bg rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-slate-900">🍽️</span>
            </div>
            <span className="text-2xl font-bold text-white">Family Meal</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              {heroTitle || "Manage meals and expenses effortlessly"}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-md">
              {heroSubtitle ||
                "Plan family dinners, calculate costs, and organize meals together with ease."}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative z-10">
          {isRegister && (
            <div className="space-y-4">
              <p className="text-slate-300">Already have an account?</p>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition group"
              >
                Login here
                <span className="group-hover:translate-x-1 transition">→</span>
              </Link>
            </div>
          )}
          {isLogin && (
            <div className="space-y-4">
              <p className="text-slate-300">New to Family Meal?</p>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition group"
              >
                Create account
                <span className="group-hover:translate-x-1 transition">→</span>
              </Link>
            </div>
          )}
        </div>
      </motion.div>

      {/* Right Side - Form Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16"
      >
        <div className="max-w-md w-full mx-auto">
          {/* Mobile Header */}
          <div className="lg:hidden mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-slate-900">🍽️</span>
            </div>
            <span className="text-xl font-bold text-slate-900">
              Family Meal
            </span>
          </div>

          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
              {title}
            </h2>
            {subtitle && <p className="text-slate-600">{subtitle}</p>}
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-5">
            {fields.map((field) => (
              <FormInput
                key={field.name}
                label={field.label}
                register={field.register}
                type={field.type}
                placeholder={field.placeholder}
                error={field.error}
                disabled={disabled}
              />
            ))}

            {errorMessage && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm bg-red-50 p-3 rounded-lg"
              >
                {errorMessage}
              </motion.p>
            )}

            {/* Remember Me & Forgot Password */}
            {isLogin && (
              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    onChange={(e) => onRememberMeChange?.(e.target.checked)}
                    className="w-4 h-4 border-2 border-slate-300 rounded cursor-pointer accent-purple-400"
                  />
                  <span className="text-sm text-slate-700 group-hover:text-slate-900">
                    Remember me
                  </span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-slate-600 hover:text-slate-900 transition"
                >
                  Forgot password?
                </Link>
              </div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={disabled}
              className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {buttonText}
            </motion.button>
          </form>

          {/* Divider */} 
          {isLogin && (
            <>
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-slate-200"></div>
                <span className="text-xs text-slate-500 uppercase tracking-wide">
                  Or
                </span>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>
              {/* Social Login */}
              <div className="space-y-3">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-slate-200 rounded-lg hover:bg-slate-50 transition font-medium text-slate-700"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#4285F4"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </button>
              </div>
            </>
          )}

          {/* Bottom Links */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-center">
            {linkBelowForm && (
              <p className="text-slate-600">
                <Link
                  href={linkBelowForm.href}
                  className="text-purple-600 font-semibold hover:text-purple-700 transition"
                >
                  {linkBelowForm.text}
                </Link>
              </p>
            )}
            {extraLink && (
              <p className="text-slate-600 mt-2">
                <Link
                  href={extraLink.href}
                  className="text-purple-600 font-semibold hover:text-purple-700 transition"
                >
                  {extraLink.text}
                </Link>
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthForm;
