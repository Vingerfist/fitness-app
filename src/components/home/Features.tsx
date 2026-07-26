export default function Features() {
    const features = [
      {
        icon: "💪",
        title: "AI Workout Plans",
        description:
          "Generate personalized workout routines based on your goals, experience, and available equipment.",
      },
      {
        icon: "🥗",
        title: "Smart Diet Plans",
        description:
          "Receive simple, practical meal plans with calorie and protein targets tailored to you.",
      },
      {
        icon: "📈",
        title: "Track Progress",
        description:
          "Monitor your workouts, body measurements, and achievements all in one place.",
      },
    ];
  
    return (
      <section className="bg-gray-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
  
          <h2 className="text-center text-4xl font-bold">
            Everything You Need
          </h2>
  
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            One platform to plan workouts, improve nutrition,
            and track your fitness journey.
          </p>
  
          <div className="mt-16 grid gap-8 md:grid-cols-3">
  
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-800 bg-gray-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="text-5xl">{feature.icon}</div>
  
                <h3 className="mt-6 text-2xl font-semibold">
                  {feature.title}
                </h3>
  
                <p className="mt-4 text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
  
          </div>
        </div>
      </section>
    );
  }