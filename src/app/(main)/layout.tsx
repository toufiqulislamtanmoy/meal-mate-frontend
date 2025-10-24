import Navbar from "@/components/Navigation/Navbar";
import type { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {children}
      </div>
    </>
  );
};

export default layout;
