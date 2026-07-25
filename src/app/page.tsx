export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white">
      <h1 className="text-6xl font-bold">
        Fitness Platform
      </h1>

      <p className="mt-6 text-xl text-gray-400">
        Free workout and diet plans in under 60 seconds.
      </p>

      <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-700 transition">
        Generate My Plan
      </button>
    </main>
  )
}