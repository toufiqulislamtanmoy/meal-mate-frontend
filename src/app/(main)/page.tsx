"use client";
import Image from "next/image";
import { useState } from "react";

// TYPES
interface LastUpdate {
  user_name: string;
  date_time: string;
}

interface Family {
  family_name: string;
  image: string;
  lastupdate: LastUpdate;
}

interface Expense {
  id: number;
  item: string;
  by: string;
  remainingBalance: number;
  amount: number;
}

interface Deposit {
  id: number;
  item: string;
  by: string;
  newBalance: number;
  amount: number;
}

// MAIN COMPONENT
const FamilyDashboard: React.FC = () => {
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

  const [families] = useState<Family[]>(dummyFamilies);
  const [selectedFamily, setSelectedFamily] = useState<Family>(
    dummyFamilies[0]
  );
  const [activeTab, setActiveTab] = useState<
    "expense" | "deposit" | "overview"
  >("expense");

  const dummyExpenses: Expense[] = [
    {
      id: 1,
      item: "Groceries",
      by: "Toufiqul Islam",
      remainingBalance: 11700,
      amount: 800,
    },
    {
      id: 2,
      item: "Utilities",
      by: "Hasan Ali",
      remainingBalance: 10900,
      amount: 800,
    },
    {
      id: 3,
      item: "Dining Out",
      by: "Toufiqul Islam",
      remainingBalance: 10100,
      amount: 800,
    },
  ];

  const dummyDeposits: Deposit[] = [
    {
      id: 1,
      item: "Salary",
      by: "Toufiqul Islam",
      newBalance: 12500,
      amount: 15000,
    },
    {
      id: 2,
      item: "Freelance Work",
      by: "Hasan Ali",
      newBalance: 18500,
      amount: 6000,
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* LEFT SIDEBAR - Glass morphism */}
      <div className="w-80 bg-white/80 backdrop-blur-xl border-r border-gray-200/60 flex flex-col shadow-xl">
        <div className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 p-6">
          <h2 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Families
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {families.map((fam) => (
            <div
              key={fam.family_name}
              onClick={() => setSelectedFamily(fam)}
              className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 group ${
                selectedFamily.family_name === fam.family_name
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25 transform scale-105"
                  : "bg-white/60 hover:bg-white/80 hover:shadow-lg border border-white/50"
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
                      ? "text-white"
                      : "text-gray-800"
                  }`}
                >
                  {fam.family_name.replace("_", " ")}
                </p>
                <p
                  className={`text-sm truncate ${
                    selectedFamily.family_name === fam.family_name
                      ? "text-blue-100"
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
            <div className="flex items-center justify-center gap-2 text-gray-500 group-hover:text-blue-600">
              <div className="w-8 h-8 rounded-full bg-gray-200 group-hover:bg-blue-100 flex items-center justify-center">
                <span className="text-lg font-semibold">+</span>
              </div>
              <span className="font-medium">Add Family</span>
            </div>
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
          <div className="flex justify-between items-center p-6">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent capitalize">
                {selectedFamily.family_name.replace("_", " ")}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Last updated by {selectedFamily.lastupdate.user_name}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 font-medium">
                Available Balance
              </p>
              <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {formatCurrency(12500)}
              </p>
            </div>
          </div>

          {/* FILTERS */}
          <div className="px-6 pb-4 flex items-center gap-3">
            <select className="border border-gray-300/60 rounded-xl px-4 py-2.5 text-sm bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
              <option>October 2025</option>
              <option>September 2025</option>
              <option>August 2025</option>
            </select>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all">
              Apply Filter
            </button>
          </div>
        </div>

        {/* TABS & CONTENT */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Modern Tab Bar */}
          <div className="flex space-x-1 bg-gray-100/60 rounded-2xl p-1.5 w-fit mb-8">
            {[
              { key: "expense", label: "Expenses", icon: "📤" },
              { key: "deposit", label: "Deposits", icon: "📥" },
              { key: "overview", label: "Overview", icon: "📊" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() =>
                  setActiveTab(tab.key as "expense" | "deposit" | "overview")
                }
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-white shadow-lg text-blue-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="transition-all duration-300">
            {/* EXPENSE */}
            {activeTab === "expense" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Recent Expenses
                  </h3>
                  <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all flex items-center gap-2">
                    <span>+</span>
                    Add Expense
                  </button>
                </div>

                <div className="grid gap-4">
                  {dummyExpenses.map((exp) => (
                    <div
                      key={exp.id}
                      className="group p-5 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-red-100 transition-all duration-300 hover:transform hover:-translate-y-0.5"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
                            <span className="text-red-600 text-lg">🛒</span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              {exp.item}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              By {exp.by}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              Remaining: {formatCurrency(exp.remainingBalance)}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-red-600 text-lg">
                            -{formatCurrency(exp.amount)}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {formatDate("2025-11-05T20:45")}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DEPOSIT */}
            {activeTab === "deposit" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Recent Deposits
                  </h3>
                  <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all flex items-center gap-2">
                    <span>+</span>
                    Add Deposit
                  </button>
                </div>

                <div className="grid gap-4">
                  {dummyDeposits.map((dep) => (
                    <div
                      key={dep.id}
                      className="group p-5 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-green-100 transition-all duration-300 hover:transform hover:-translate-y-0.5"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                            <span className="text-green-600 text-lg">💰</span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              {dep.item}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              By {dep.by}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              New Balance: {formatCurrency(dep.newBalance)}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600 text-lg">
                            +{formatCurrency(dep.amount)}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {formatDate("2025-11-05T20:45")}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* OVERVIEW */}
            {activeTab === "overview" && (
              <div className="space-y-6 animate-fadeIn">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <span className="text-green-600 text-xl">📈</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">
                          Total Deposit
                        </p>
                        <p className="text-2xl font-bold text-gray-800">
                          {formatCurrency(20000)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <span className="text-red-600 text-xl">📉</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">
                          Total Expense
                        </p>
                        <p className="text-2xl font-bold text-gray-800">
                          {formatCurrency(7500)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <span className="text-blue-600 text-xl">⚖️</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">
                          Net Balance
                        </p>
                        <p className="text-2xl font-bold text-gray-800">
                          {formatCurrency(12500)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-semibold text-gray-800 mb-4">
                    Family Overview
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-3">
                        Recent Activity
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-sm text-gray-600">
                            Last Expense
                          </span>
                          <span className="text-sm font-medium text-gray-800">
                            Groceries
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-sm text-gray-600">
                            Last Deposit
                          </span>
                          <span className="text-sm font-medium text-gray-800">
                            Salary
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-3">
                        Family Members
                      </h4>
                      <div className="flex gap-3">
                        {dummyFamilies.map((fam) => (
                          <div key={fam.family_name} className="text-center">
                            <img
                              src={fam.image}
                              alt={fam.family_name}
                              className="w-10 h-10 rounded-xl object-cover mx-auto mb-1"
                            />
                            <p className="text-xs text-gray-600 truncate max-w-[80px]">
                              {fam.lastupdate.user_name.split(" ")[0]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      Last updated:{" "}
                      {formatDate(selectedFamily.lastupdate.date_time)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FamilyDashboard;
