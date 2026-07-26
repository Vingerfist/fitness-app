export default function Hero() {
  return (
    <section className="flex min-h-screen pt-20 flex-col items-center justify-center bg-gray-950 px-6 text-center text-white">

      <span className="rounded-full border border-blue-500 px-4 py-1 text-sm text-blue-400">
         PERSONAL AI FITNESS
      </span>

      <h1 className="mt-8 max-w-4xl text-6xl font-extrabold leading-tight">
        YOUR BODY.
        <br />
        YOUR SYSTEM.
        <br />
        YOUR EVOLUTION.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-400">
      Personalized workouts, nutrition and progress tracking powered by AI — built around your body, your goals and your lifestyle.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700">
          Generate My Plan
        </button>

        <button className="rounded-xl border border-gray-600 px-8 py-4 transition hover:border-white">
          Learn More
        </button>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        ⭐⭐⭐⭐⭐ Trusted by fitness enthusiasts
      </p>

    </section>
  );
}