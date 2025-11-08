"use client";
import { Family } from "@/types/family";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const dummyFamilies: Family[] = [
  {
    family_name: "vuan_family",
    image:
      "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=100&h=100&fit=crop&crop=face",
    lastupdate: {
      user_name: "Toufiqul Islam",
      date_time: "2025-11-05T20:45",
    },
  },
  {
    family_name: "hossain_family",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    lastupdate: {
      user_name: "Hasan Ali",
      date_time: "2025-10-22T18:20",
    },
  },
];
const FamilyListSidebar = () => {
  const [families] = useState<Family[]>(dummyFamilies);
  const [selectedFamily, setSelectedFamily] = useState<Family>(
    dummyFamilies[0]
  );
  return (
    <div className="lg:w-80 w-full bg-white/80 backdrop-blur-xl border-r border-gray-200/60 flex flex-col">
      <div className="flex items-center justify-between px-6 sticky top-0 bg-white z-50 border-b border-gray-200 pb-2">
        <Link
          href="/"
          className="flex items-center gap-2 group mt-3 "
        >
          <div className="w-8 h-8 bg-linear-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">🍽</span>
          </div>
          <span className="text-xl font-bold text-gray-900 group-hover:text-primary transition">
            Family Meal
          </span>
        </Link>

        <button>
          <AiOutlineUsergroupAdd size={22}/>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {families?.map((fam) => (
          <Link
            href={`/family/${fam?.family_name}`}
            key={fam.family_name}
            onClick={() => setSelectedFamily(fam)}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 group ${
              selectedFamily.family_name === fam.family_name
                ? "bg-secondary/10 text-black transform scale-105"
                : "bg-white/60 hover:bg-white/80 border border-white/50"
            }`}
          >
            <div className="relative">
              <Image
                height={200}
                width={200}
                src={
                  "https://play-lh.googleusercontent.com/KwnZCqgVraZy2T3eEnYHrHVRYNMOaA6-g2VbyHHJfxBx2wvF4InQBikgsa0Dp-Bnj-rD"
                }
                alt={fam.family_name}
                className="w-12 h-12 rounded-2xl object-cover shadow-md"
              />
              {selectedFamily.family_name === fam.family_name && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className={`font-semibold capitalize truncate ${
                  selectedFamily.family_name === fam.family_name
                    ? ""
                    : "text-gray-800"
                }`}
              >
                {fam.family_name.replace("_", " ")}
              </p>
              <p
                className={`text-sm truncate ${
                  selectedFamily.family_name === fam.family_name
                    ? ""
                    : "text-gray-500"
                }`}
              >
                {fam.lastupdate.user_name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FamilyListSidebar;
