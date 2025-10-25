"use client";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  register: any;
  error?: string;
  disabled?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ label, type = "text", placeholder, register, error, disabled }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex flex-col w-full">
      <label className="text-gray-700 font-medium mb-1">{label}</label>
      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          {...register}
          disabled={disabled}
          className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:outline-none transition ${error ? "border-red-500" : "border-gray-300"}`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
