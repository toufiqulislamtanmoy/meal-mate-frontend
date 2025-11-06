import Image from "next/image";
import { Family } from "@/types/family";

interface FamilyListSidebarProps {
  families: Family[];
  selectedFamily: Family;
  setSelectedFamily: (family: Family) => void;
}

const FamilyListSidebar = ({
  families,
  selectedFamily,
  setSelectedFamily,
}: FamilyListSidebarProps) => {
  return (
    <div className="w-80 bg-white/80 backdrop-blur-xl border-r border-gray-200/60 flex flex-col shadow-xl">
      <div className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 p-6">
        <h2 className="text-xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Families
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {families?.map((fam) => (
          <div
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
          </div>
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
  );
};

export default FamilyListSidebar;
