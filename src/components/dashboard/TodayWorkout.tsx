export default function TodayWorkout() {
    return (
      <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black">
            Today's Workout
          </h2>
  
          <button className="rounded-xl bg-black px-5 py-3 font-semibold text-white">
            Start Workout
          </button>
        </div>
  
        <div className="mt-8 space-y-4">
  
          <div className="rounded-xl border p-5">
            <h3 className="font-bold">
              Push Day
            </h3>
  
            <p className="mt-2 text-gray-500">
              Chest • Shoulders • Triceps
            </p>
          </div>
  
          <div className="rounded-xl border p-5">
            Incline Dumbbell Press
          </div>
  
          <div className="rounded-xl border p-5">
            Machine Chest Press
          </div>
  
          <div className="rounded-xl border p-5">
            Cable Fly
          </div>
  
        </div>
      </section>
    );
  }