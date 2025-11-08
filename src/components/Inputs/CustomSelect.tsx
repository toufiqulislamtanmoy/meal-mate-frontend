"use client";

import * as React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";


interface Option {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  width?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder = "Select an option",
  value,
  onChange,
  width = "w-48",
}) => {
  const [open, setOpen] = React.useState(false);

  const selected = options.find((opt) => opt.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex items-center justify-between rounded-lg border border-gray-200 bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all",
            width
          )}
        >
          <div className="flex items-center gap-2">
            {selected?.icon}
            <span>{selected ? selected.label : placeholder}</span>
          </div>
          <ChevronDown
            size={18}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </PopoverTrigger>

      <PopoverContent
        className={cn(
          "p-1 mt-2 w-full bg-background rounded-lg border border-gray-200 shadow-md",
          width
        )}
        align="start"
      >
        <ul className="max-h-56 overflow-y-auto">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={cn(
                "flex items-center justify-between rounded-md px-3 py-2 cursor-pointer text-sm hover:bg-primary hover:text-primary-content transition-all",
                value === opt.value &&
                  "bg-primary text-primary-content"
              )}
            >
              <div className="flex items-center gap-2">
                {opt.icon}
                {opt.label}
              </div>
              {value === opt.value && <Check size={16} />}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
