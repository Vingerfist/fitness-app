import Card from "@/components/ui/Card";

export default function ProgramOverview() {
  return (
    <Card>
      <h2 className="text-2xl font-black">
        Program Overview
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-3">

        <div>
          <p className="text-sm text-gray-500">
            Program
          </p>

          <p className="mt-1 text-lg font-bold">
            Push • Pull • Legs
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Current Week
          </p>

          <p className="mt-1 text-lg font-bold">
            Week 3 / 8
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Goal
          </p>

          <p className="mt-1 text-lg font-bold">
            Hypertrophy
          </p>
        </div>

      </div>
    </Card>
  );
}