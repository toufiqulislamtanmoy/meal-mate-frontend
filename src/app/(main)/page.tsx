"use client"
import { useState } from "react";
import { Plus, Search, MoreHorizontal, Users, Clock, User } from "lucide-react";
import Image from "next/image";

interface FamilyGroup {
  id: string;
  name: string;
  image?: string;
  members: number;
  lastUpdated: string;
  updatedBy: string;
  updatedByImage?: string;
  lastCalculation: string;
  totalMeals: number;
}

const FamilyList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const familyGroups: FamilyGroup[] = [
    {
      id: "1",
      name: "Smith Family",
      image: "https://img.freepik.com/free-photo/close-up-hand-with-meal-plan_23-2148484654.jpg?semt=ais_hybrid&w=740&q=80",
      members: 4,
      lastUpdated: "2 min ago",
      updatedBy: "John Smith",
      updatedByImage: "/user1.jpg",
      lastCalculation: "Dinner: $45.20",
      totalMeals: 42,
    },
    {
      id: "2",
      name: "Weekend Cookouts",
      image: "https://img.freepik.com/free-photo/close-up-hand-with-meal-plan_23-2148484654.jpg?semt=ais_hybrid&w=740&q=80",
      members: 8,
      lastUpdated: "1 hour ago",
      updatedBy: "Sarah Johnson",
      updatedByImage: "/user2.jpg",
      lastCalculation: "BBQ: $120.75",
      totalMeals: 18,
    },
    {
      id: "3",
      name: "Healthy Recipes",
      image: "https://img.freepik.com/free-photo/close-up-hand-with-meal-plan_23-2148484654.jpg?semt=ais_hybrid&w=740&q=80",
      members: 6,
      lastUpdated: "3 hours ago",
      updatedBy: "Mike Chen",
      updatedByImage: "/user3.jpg",
      lastCalculation: "Salad: $28.50",
      totalMeals: 35,
    },
    {
      id: "4",
      name: "Holiday Meals",
      image: "https://img.freepik.com/free-photo/close-up-hand-with-meal-plan_23-2148484654.jpg?semt=ais_hybrid&w=740&q=80",
      members: 12,
      lastUpdated: "1 day ago",
      updatedBy: "Emily Davis",
      updatedByImage: "/user4.jpg",
      lastCalculation: "Christmas: $340.00",
      totalMeals: 8,
    },
    {
      id: "5",
      name: "Quick Dinner Club",
      image: "https://img.freepik.com/free-photo/close-up-hand-with-meal-plan_23-2148484654.jpg?semt=ais_hybrid&w=740&q=80",
      members: 5,
      lastUpdated: "2 days ago",
      updatedBy: "Alex Brown",
      updatedByImage: "/user5.jpg",
      lastCalculation: "Pasta: $35.80",
      totalMeals: 27,
    },
  ];

  const filteredGroups = familyGroups.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - Family List */}
      <div className="w-full md:w-96 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-foreground">Family Groups</h1>
            <button className="p-2 bg-primary text-primary-content rounded-full hover:bg-primary-focus transition">
              <Plus size={20} />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search families..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Family List */}
        <div className="flex-1 overflow-y-auto">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className={`border-b border-gray-100 p-4 cursor-pointer transition ${
                selectedGroup === group.id
                  ? "bg-primary/5 bg-opacity-5 border-l-4 border-l-primary"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => setSelectedGroup(group.id)}
            >
              <div className="flex items-start gap-3">
                {/* Family Thumb */}
                <div className="shrink-0">
                  {group.image ? (
                    <Image
                      src={group.image}
                      alt={group.name}
                      height={200}
                      width={200}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-linear-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <Users size={20} className="text-primary-content" />
                    </div>
                  )}
                </div>

                {/* Family Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-foreground truncate">
                      {group.name}
                    </h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap flex items-center gap-1">
                      <Clock size={12} />
                      {group.lastUpdated}
                    </span>
                  </div>

                  {/* Last Calculation */}
                  <p className="text-sm text-gray-600 mb-2 truncate">
                    {group.lastCalculation}
                  </p>

                  {/* Updated By */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {group.updatedByImage ? (
                        <Image
                          height={200}
                          width={200}
                          src={group.updatedByImage}
                          alt={group.updatedBy}
                          className="w-4 h-4 rounded-full"
                        />
                      ) : (
                        <User size={12} className="text-gray-400" />
                      )}
                      <span className="text-xs text-gray-500">
                        by {group.updatedBy}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">•</span>
                    <div className="flex items-center gap-1">
                      <Users size={12} className="text-gray-400" />
                      <span className="text-xs text-gray-500">
                        {group.members} members
                      </span>
                    </div>
                  </div>
                </div>

                {/* Options button */}
                <button className="p-1 text-gray-400 hover:text-foreground rounded transition">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {selectedGroup ? (
          <>
            {/* Family Header */}
            <div className="border-b border-gray-200 bg-white p-4">
              <div className="flex items-center gap-4">
                {familyGroups.find((g) => g.id === selectedGroup)?.image ? (
                  <Image
                    src={
                      familyGroups.find((g) => g.id === selectedGroup)?.image || ""
                    }
                    alt={familyGroups.find((g) => g.id === selectedGroup)?.name || ""}
                    height={200}
                    width={200}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-linear-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <Users size={24} className="text-primary-content" />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    {familyGroups.find((g) => g.id === selectedGroup)?.name}
                  </h2>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Users size={14} />
                    {
                      familyGroups.find((g) => g.id === selectedGroup)?.members
                    }{" "}
                    family members
                  </p>
                </div>
              </div>
            </div>

            {/* Meal Calculations Content */}
            <div className="flex-1 bg-gray-50 p-6">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-linear-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users size={32} className="text-primary-content" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {familyGroups.find((g) => g.id === selectedGroup)?.name}{" "}
                      Meal Calculations
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Total meals:{" "}
                      {
                        familyGroups.find((g) => g.id === selectedGroup)
                          ?.totalMeals
                      }
                    </p>
                    <p className="text-sm text-gray-500">
                      Last updated:{" "}
                      {
                        familyGroups.find((g) => g.id === selectedGroup)
                          ?.lastUpdated
                      }{" "}
                      by{" "}
                      {
                        familyGroups.find((g) => g.id === selectedGroup)
                          ?.updatedBy
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="w-24 h-24 bg-linear-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-primary-content" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Select a Family
              </h2>
              <p className="text-gray-600 mb-6">
                Choose a family group to view meal calculations and expenses
              </p>
              <button className="bg-primary text-primary-content px-6 py-3 rounded-lg hover:bg-primary-focus transition">
                Create New Family
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FamilyList;
