import Link from "next/link";
import { IoCreateOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="max-h-20 container flex items-center justify-between px-4 py-2">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 bg-linear-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">🍽</span>
        </div>
        <span className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition">
          Family Meal
        </span>
      </Link>

      <button className="cursor-pointer">
        <IoCreateOutline size={22} />
      </button>
    </nav>
  );
};

export default Navbar;
