export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <h1 className="text-6xl font-extrabold">
          Transform Your Body
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-400">
          Get personalized workout routines and easy diet plans in under
          60 seconds.
        </p>

        <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-700">
          Generate My Plan
        </button>

      </section>

    </main>
  )
}