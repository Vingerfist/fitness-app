import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function WorkoutHeader() {
  return (
    <Card>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Current Program
          </p>

          <h1 className="mt-2 text-4xl font-black">
            Push Day
          </h1>

          <p className="mt-2 text-gray-500">
            Week 3 of 8 • Hypertrophy Phase
          </p>
        </div>

        <Button>
          Start Workout
        </Button>

      </div>
    </Card>
  );
}