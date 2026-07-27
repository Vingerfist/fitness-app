import Card from "@/components/ui/Card";

export default function PersonalRecords() {
  const records = [
    { exercise: "Bench Press", weight: "100 kg" },
    { exercise: "Squat", weight: "140 kg" },
    { exercise: "Deadlift", weight: "180 kg" },
  ];

  return (
    <Card>
      <h2 className="text-2xl font-black">
        Personal Records
      </h2>

      <div className="mt-6 space-y-4">
        {records.map((record) => (
          <div
            key={record.exercise}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <span className="font-medium">
              {record.exercise}
            </span>

            <span className="font-black">
              {record.weight}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}