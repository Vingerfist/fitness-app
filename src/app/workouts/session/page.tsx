```tsx
"use client";

import { useEffect, useState } from "react";

import WorkoutHeader from "@/components/workout-session/WorkoutHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { exercises } from "@/data/workouts";

export default function WorkoutSessionPage() {
  const REST_SECONDS = 120;

  // For now, we start with the first exercise from the workout data.
  const currentExercise = exercises[0];

  const [workoutStarted, setWorkoutStarted] = useState(false);
  const [resting, setResting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(REST_SECONDS);

  const TOTAL_SETS = currentExercise.sets;

  const [currentSet, setCurrentSet] = useState(1);
  const [completedSets, setCompletedSets] = useState<number[]>([]);
  const [exerciseCompleted, setExerciseCompleted] = useState(false);

  useEffect(() => {
    if (!resting) return;

    if (timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [resting, timeLeft]);

  function formatTime(seconds: number) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;

    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }

  return (
    <div className="mx-auto max-w-6xl p-8">
      {/* Header */}

      <WorkoutHeader
        title="Push Day A"
        currentExercise={currentExercise.id}
        totalExercises={exercises.length}
      />

      {/* Current Exercise */}

      <Card>
        <h2 className="text-3xl font-black">
          {currentExercise.name}
        </h2>

        <p className="mt-2 text-gray-500">
          Chest • {currentExercise.muscle}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <div>
            <p className="text-gray-500">Weight</p>

            <h3 className="text-3xl font-black">
              80 kg
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Target Reps</p>

            <h3 className="text-3xl font-black">
              {currentExercise.reps}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Current Set</p>

            <h3 className="text-3xl font-black">
              {currentSet} / {TOTAL_SETS}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">Rest Timer</p>

            <h3 className="text-3xl font-black">
              {formatTime(timeLeft)}
            </h3>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          {!workoutStarted ? (
            <Button
              onClick={() => {
                setWorkoutStarted(true);
                setResting(false);
              }}
            >
              ▶ Start Set
            </Button>
          ) : (
            <Button
              onClick={() => {
                setWorkoutStarted(false);

                setResting(true);

                setTimeLeft(REST_SECONDS);

                setCompletedSets((prev) => [...prev, currentSet]);

                if (currentSet < TOTAL_SETS) {
                  setCurrentSet((prev) => prev + 1);
                } else {
                  setExerciseCompleted(true);
                  setResting(false);
                }
              }}
            >
              ✔ Finish Set
            </Button>
          )}
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-bold">
            Set Progress
          </h3>

          {exerciseCompleted && (
            <div className="mt-8 rounded-2xl border border-green-500 bg-green-50 p-6 text-center">
              <h3 className="text-2xl font-black text-green-700">
                🎉 Exercise Complete!
              </h3>

              <p className="mt-2 text-gray-600">
                Great job! Ready for the next exercise.
              </p>

              <div className="mt-6">
                <Button variant="success">
                  Continue →
                </Button>
              </div>
            </div>
          )}

          <div className="mt-4 flex gap-3">
            {Array.from({ length: TOTAL_SETS }).map((_, index) => {
              const setNumber = index + 1;

              const completed = completedSets.includes(setNumber);

              return (
                <div
                  key={setNumber}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 font-bold transition-all ${
                    completed
                      ? "border-green-600 bg-green-600 text-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {setNumber}
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}
```
