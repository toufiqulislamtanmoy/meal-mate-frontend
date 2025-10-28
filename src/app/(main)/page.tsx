"use client"

import { ArrowRight, Users, Calculator, Clock, TrendingDown } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-r from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                  Plan Meals,
                  <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    {" "}
                    Save Money
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Organize family dinners, calculate meal costs, and manage expenses effortlessly. Family Meal Mate
                  makes meal planning simple and affordable.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
                >
                  Create Account
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div>
                  <p className="text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-gray-600">Families Planning</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">$2M+</p>
                  <p className="text-gray-600">Saved Together</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block">
              <div className="bg-linear-to-rr from-purple-100 to-indigo-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-purple-600 to-indigo-600 rounded-full">
                    <span className="text-4xl">🍽️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Family Meal Mate</h3>
                  <p className="text-gray-600">Smart Meal Planning & Expense Calculator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Family Meal Mate?</h2>
            <p className="text-xl text-gray-600">Everything you need to manage family meals and expenses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl bg-linear-to-rr from-purple-50 to-indigo-50 border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-r from-purple-600 to-indigo-600 rounded-lg mb-4">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Family Coordination</h3>
              <p className="text-gray-600">Invite family members and coordinate meal planning together in real-time</p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-xl bg-linear-to-rr from-purple-50 to-indigo-50 border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-r from-purple-600 to-indigo-600 rounded-lg mb-4">
                <Calculator size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Calculator</h3>
              <p className="text-gray-600">
                Automatically calculate meal costs and split expenses fairly among family members
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-xl bg-linear-to-rr from-purple-50 to-indigo-50 border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-r from-purple-600 to-indigo-600 rounded-lg mb-4">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Weekly Planning</h3>
              <p className="text-gray-600">
                Plan your meals week by week and stay organized with our intuitive calendar
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-xl bg-linear-to-rr from-purple-50 to-indigo-50 border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-r from-purple-600 to-indigo-600 rounded-lg mb-4">
                <TrendingDown size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Budget Tracking</h3>
              <p className="text-gray-600">Track spending patterns and get insights to reduce your meal expenses</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Simplify Meal Planning?</h2>
            <p className="text-lg text-purple-100 mb-8">
              Join hundreds of families already saving time and money with Family Meal Mate
            </p>
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Today
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Family Meal Mate</h3>
              <p className="text-sm">Smart meal planning and expense calculator for families</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Family Meal Mate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
