"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FormInput from "@/components/Form/FormInput";
import { UseFormRegisterReturn } from "react-hook-form";

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
  fields: AuthFormField[];
  onSubmit: (e: React.FormEvent) => void;
  buttonText: string;
  imageSrc?: string;
  disabled?: boolean;
  errorMessage?: string;
  extraLink?: { text: string; href: string }; 
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  fields,
  onSubmit,
  buttonText,
  imageSrc,
  disabled,
  errorMessage,
  extraLink,
}) => {
  const lowerTitle = title.toLowerCase();
  const isLogin = lowerTitle.includes("login");
  const isRegister = lowerTitle.includes("register");

  // Default bottom link
  let linkBelowForm: { text: string; href: string } | null = null;
  if (isLogin) linkBelowForm = { text: "Forgot Password?", href: "/forgot-password" };
  else if (isRegister) linkBelowForm = { text: "Already have an account? Login", href: "/login" };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-blue-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white shadow-lg rounded-3xl p-10 w-full max-w-md flex flex-col items-center"
      >
        {imageSrc && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Image src={imageSrc} alt="App Logo" width={60} height={60} className="mb-6 rounded-full shadow-sm" />
          </motion.div>
        )}

        <h2 className="text-3xl font-extrabold text-purple-600 mb-6">{title}</h2>

        <form onSubmit={onSubmit} className="w-full space-y-4">
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

          {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={disabled}
            className="w-full bg-purple-600 text-white py-3 rounded-xl mt-2 hover:bg-purple-700 transition shadow-md hover:shadow-purple-300 disabled:opacity-50"
          >
            {buttonText}
          </motion.button>
        </form>

        {linkBelowForm && (
          <p className="text-sm text-gray-600 mt-4 text-center">
            <Link href={linkBelowForm.href} className="text-purple-600 font-medium hover:underline">
              {linkBelowForm.text}
            </Link>
          </p>
        )}
        {extraLink && (
          <p className="text-sm text-gray-600 mt-2 text-center">
            <Link href={extraLink.href} className="text-purple-600 font-medium hover:underline">
              {extraLink.text}
            </Link>
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default AuthForm;
