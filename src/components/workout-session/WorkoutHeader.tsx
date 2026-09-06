type WorkoutHeaderProps = {
    title: string;
    currentExercise: number;
    totalExercises: number;
  };
  
  export default function WorkoutHeader({
    title,
    currentExercise,
    totalExercises,
  }: WorkoutHeaderProps) {
    return (
      <section className="mb-10">
        <h1 className="text-5xl font-black">
          {title}
        </h1>
  
        <p className="mt-3 text-gray-500">
          Exercise {currentExercise} of {totalExercises}
        </p>
      </section>
    );
  }