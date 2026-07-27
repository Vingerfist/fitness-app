import Card from "@/components/ui/Card";

export default function WorkoutHistory() {
  const history = [
    {
      date: "Yesterday",
      workout: "Push Day",
      duration: "62 min",
    },
    {
      date: "2 Days Ago",
      workout: "Pull Day",
      duration: "58 min",
    },
    {
      date: "4 Days Ago",
      workout: "Leg Day",
      duration: "74 min",
    },
  ];

  return (
    <Card>
      <h2 className="text-2xl font-black">
        Workout History
      </h2>

      <div className="mt-6 space-y-4">
        {history.map((session) => (
          <div
            key={`${session.date}-${session.workout}`}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div>
              <p className="font-bold">
                {session.workout}
              </p>

              <p className="text-sm text-gray-500">
                {session.date}
              </p>
            </div>

            <span className="font-semibold">
              {session.duration}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}