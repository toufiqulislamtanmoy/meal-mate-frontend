import FamilyListSidebar from "@/components/Family/FamilyListSidebar";
import { Users2, MousePointerClick, ArrowRight } from "lucide-react";

const MainPage = () => {
  return (
    <div className="h-full w-full">
      <div className="lg:hidden flex w-full h-full">
        <FamilyListSidebar />
      </div>
      <div className="h-full w-full lg:flex hidden flex-col items-center justify-center text-center bg-background px-6">
        <div className="flex flex-col items-center justify-center max-w-md">
          <div className="relative mb-6">
            <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-primary text-primary-content shadow-md">
              <Users2 size={40} />
            </div>
            <ArrowRight
              size={24}
              className="absolute -right-6 top-1/2 -translate-y-1/2 text-primary animate-pulse hidden sm:block"
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Select a Family Group
          </h1>

          <p className="text-foreground/70 text-base leading-relaxed mb-6">
            Choose any group from the list on the left to see their latest
            updates, details, and activities.
          </p>

          <div className="flex items-center gap-2 text-primary font-medium">
            <MousePointerClick className="animate-bounce" size={20} />
            <span>Pick a group to get started</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
