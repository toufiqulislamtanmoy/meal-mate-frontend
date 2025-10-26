"use client"
import type React from "react"
import { useState } from "react"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"

interface FormInputProps {
  label: string
  type?: string
  placeholder?: string
  register: any
  error?: string
  disabled?: boolean
}

const FormInput: React.FC<FormInputProps> = ({ label, type = "text", placeholder, register, error, disabled }) => {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === "password"

  return (
    <div className="flex flex-col w-full">
      <label className="text-sm font-semibold text-slate-700 mb-2">{label}</label>
      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          {...register}
          disabled={disabled}
          className={`w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none ${
            error
              ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200"
              : "border-slate-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
          } disabled:bg-slate-100 disabled:cursor-not-allowed`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition"
          >
            {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1.5 font-medium">{error}</p>}
    </div>
  )
}

export default FormInput
