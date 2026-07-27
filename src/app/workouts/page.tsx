import WorkoutHeader from "@/components/workouts/WorkoutHeader";
import ProgramOverview from "@/components/workouts/ProgramOverview";
import TodayWorkout from "@/components/workouts/TodayWorkout";
import PersonalRecords from "@/components/workouts/PersonalRecords";
import WorkoutHistory from "@/components/workouts/WorkoutHistory";
import ExerciseCard from "@/components/workouts/ExerciseCard";

import { exercises } from "@/data/workouts";

export default function WorkoutsPage() {
  return (
    <div className="space-y-8">

      <WorkoutHeader />

      <ProgramOverview />

      <TodayWorkout />

      <section>

        <h2 className="mb-4 text-3xl font-black">
          Exercises
        </h2>

        <div className="space-y-4">
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              name={exercise.name}
              sets={exercise.sets}
              reps={exercise.reps}
              muscle={exercise.muscle}
            />
          ))}
        </div>

      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <PersonalRecords />

        <WorkoutHistory />
      </div>

    </div>
  );
}