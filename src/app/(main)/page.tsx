export default function Home() {
  return (
    <div className="text-center bg-white shadow-lg rounded-2xl p-12 max-w-2xl mx-auto">
      <h1 className="text-4xl font-extrabold text-purple-600 mb-4">
        Welcome to Family Meal
      </h1>
      <p className="text-gray-600 mb-8">
        Easily track deposits, manage expenses, and stay financially organized
        with your family and friends — all in one place.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="/login"
          className="px-6 py-2 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
        >
          Login
        </a>
        <a
          href="/register"
          className="px-6 py-2 rounded-full border border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition"
        >
          Register
        </a>
      </div>
    </div>
  );
}
