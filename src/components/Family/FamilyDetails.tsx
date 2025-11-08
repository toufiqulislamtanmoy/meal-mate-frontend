"use client";
import { Deposit, Expense } from "@/types/family";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";

// MAIN COMPONENT
const FamilyDetails: React.FC = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [loading, setIsLoading] = useState(false);

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
    <div className="flex-1 flex flex-col min-w-0">
      {/* Sticky Header */}
      <div className="sticky bg-primary/5 top-0 z-20 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
        <div className="flex justify-between items-center px-6 py-2">
          <div className="flex items-center gap-1">
            <Image
              src={
                "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=100&h=100&fit=crop&crop=face"
              }
              width={200}
              height={200}
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className=" font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent capitalize">
                Husain Familly
              </h2>
              <p className="text-xs text-gray-500">Last updated by Husain</p>
            </div>
          </div>

          <button
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setShowBalance(!showBalance);
                setIsLoading(false);
              }, 2000);
            }}
            className="text-right bg-primary p-3 rounded-full cursor-pointer text-primary-content flex items-center gap-1 transition-all duration-300"
          >
            <MdAttachMoney />

            {loading && <AiOutlineLoading3Quarters className="animate-spin" />}

            {showBalance && !loading && (
              <p className="text-xs">{formatCurrency(12500)}</p>
            )}
          </button>
        </div>
      </div>

      {/* FILTERS */}
      <div className="px-6 pb-4 flex items-center gap-3 mt-3">
        <select className="border border-gray-300/60 rounded-xl px-4 py-2.5 text-sm bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
          <option>October 2025</option>
          <option>September 2025</option>
          <option>August 2025</option>
        </select>
        <button className="bg-linear-to-r from-primary to-primary-focus text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:shadow-primary/25 transform hover:scale-105 transition-all">
          Apply Filter
        </button>
      </div>

      {/* TABS & CONTENT */}
      <div className="flex-1 p-6">
        {/* Modern Tab Bar */}
        <div className="flex space-x-1 bg-secondary/5 rounded-2xl p-1.5 w-full mb-8 overflow-auto">
          {[
            { key: "expense", label: "Expenses", icon: GiPayMoney },
            { key: "deposit", label: "Deposits", icon: GiReceiveMoney },
            { key: "overview", label: "Overview", icon: GiTakeMyMoney },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() =>
                  setActiveTab(tab.key as "expense" | "deposit" | "overview")
                }
                className={`cursor-pointer flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-white text-primary-focus"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <span>
                  <Icon size={22} />
                </span>
                {tab.label}
              </button>
            );
          })}
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
                <button className="bg-linear-to-r from-red-500 to-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:shadow-red-500/25 transform hover:scale-105 transition-all flex items-center gap-2">
                  <span>+</span>
                  Add Expense
                </button>
              </div>

              <div className="grid gap-4">
                {dummyExpenses.map((exp) => (
                  <div
                    key={exp.id}
                    className="group p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-red-100 transition-all duration-300 hover:transform hover:-translate-y-0.5"
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
                <button className="bg-linear-to-r from-green-500 to-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:shadow-green-500/25 transform hover:scale-105 transition-all flex items-center gap-2">
                  <span>+</span>
                  Add Deposit
                </button>
              </div>

              <div className="grid gap-4">
                {dummyDeposits.map((dep) => (
                  <div
                    key={dep.id}
                    className="group p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-green-100 transition-all duration-300 hover:transform hover:-translate-y-0.5"
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
                <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
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

                <div className="bg-linear-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
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

                <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-primary-focus text-xl">⚖️</span>
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
                    <div className="flex gap-3"></div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    Last updated:{" "}
                    <span className="font-medium text-gray-800">
                      {formatDate("2025-11-05T20:45")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FamilyDetails;
