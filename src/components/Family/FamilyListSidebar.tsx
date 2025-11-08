"use client";
import { Family } from "@/types/family";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


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
    <div className="lg:w-80 w-full bg-white/80 backdrop-blur-xl border-r border-gray-200/60 flex flex-col shadow-xl">
      <Link href="/" className="flex items-center gap-2 group px-6 mt-3">
        <div className="w-8 h-8 bg-linear-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">🍽</span>
        </div>
        <span className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition lg:inline-flex hidden">
          Family Meal
        </span>
      </Link>
      <div className="">
        <div className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/60">
          <h2 className="text-xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent lg:block hidden">
            Families
          </h2>
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

          {/* Add Family Button */}
          <button className="w-full p-4 rounded-2xl border-2 border-dashed border-gray-300/60 hover:border-blue-400/60 hover:bg-blue-50/30 transition-all duration-300 group">
            <div className="flex items-center justify-center gap-2 text-gray-500 group-hover:text-primary-focus">
              <div className="w-8 h-8 rounded-full bg-gray-200 group-hover:bg-blue-100 flex items-center justify-center">
                <span className="text-lg font-semibold">+</span>
              </div>
              <span className="font-medium">Add Family</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FamilyListSidebar;
