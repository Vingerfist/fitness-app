import DashboardCard from "@/components/dashboard/DashboardCard";
import QuickAction from "@/components/dashboard/QuickAction";

export default function DashboardPage() {
  return (
    <div>

      <section className="mb-10">
        <h1 className="text-5xl font-black">
          Welcome Back
        </h1>

        <p className="mt-3 text-gray-500">
          Here's your fitness overview for today.
        </p>
      </section>


      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <DashboardCard
          title="Calories"
          value="2450 kcal"
        />

        <DashboardCard
          title="Protein"
          value="160 g"
        />

        <DashboardCard
          title="Water"
          value="3.2 L"
        />

        <DashboardCard
          title="Weight"
          value="72 kg"
        />

      </section>


      <section className="mt-12">

        <h2 className="mb-6 text-3xl font-black">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">

          <QuickAction title="Log Workout" />

          <QuickAction title="Add Meal" />

          <QuickAction title="Update Weight" />

        </div>

      </section>


    </div>
  );
}