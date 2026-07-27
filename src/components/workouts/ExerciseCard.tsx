import Card from "@/components/ui/Card";

type Props = {
  name: string;
  sets: number;
  reps: string;
  muscle: string;
};

export default function ExerciseCard({
  name,
  sets,
  reps,
  muscle,
}: Props) {
  return (
    <Card>
      <div className="flex items-center justify-between">

        <div>
          <h3 className="text-xl font-black">
            {name}
          </h3>

          <p className="mt-1 text-gray-500">
            {muscle}
          </p>
        </div>

        <div className="text-right">
          <p className="font-bold">
            {sets} Sets
          </p>

          <p className="text-gray-500">
            {reps} Reps
          </p>
        </div>

      </div>
    </Card>
  );
}