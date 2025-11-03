"use client";
import { Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenu } from "react-icons/cg";
import { GiFamilyTree } from "react-icons/gi";

const BottomNavigation = () => {
  const pathName = usePathname();
  return (
    <div>
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200">
        <div className="flex items-center justify-around py-3">
          <Link
            href="/"
            className={`flex flex-col items-center ${
              pathName === "/" ? "text-primary" : "text-gray-600"
            }`}
          >
            <GiFamilyTree size={22} />
            <span className="text-xs mt-1">Family</span>
          </Link>

          <Link
            href="/groups"
            className={`flex flex-col items-center ${
              pathName === "/groups" ? "text-primary" : "text-gray-600"
            }`}
          >
            <Users size={20} />
            <span className="text-xs mt-1">Groups</span>
          </Link>

          <Link
            href="/profile"
            className={`flex flex-col items-center ${
              pathName === "/profile" ? "text-primary" : "text-gray-600"
            }`}
          >
            <CgMenu size={22} />
            <span className="text-xs mt-1">Menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
