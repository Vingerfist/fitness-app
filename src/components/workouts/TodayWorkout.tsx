import Card from "@/components/ui/Card";

export default function TodayWorkout() {
  return (
    <Card>
      <h2 className="text-2xl font-black">
        Today's Workout
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-4">

        <div>
          <p className="text-sm text-gray-500">
            Focus
          </p>

          <p className="mt-1 font-bold">
            Chest • Shoulders • Triceps
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Exercises
          </p>

          <p className="mt-1 font-bold">
            6
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Estimated Time
          </p>

          <p className="mt-1 font-bold">
            60 Minutes
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Total Sets
          </p>

          <p className="mt-1 font-bold">
            20
          </p>
        </div>

      </div>
    </Card>
  );
}