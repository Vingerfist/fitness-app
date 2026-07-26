import DashboardCard from "@/components/dashboard/DashboardCard";
import QuickAction from "@/components/dashboard/QuickAction";
import TodayWorkout from "@/components/dashboard/TodayWorkout";
import NutritionSummary from "@/components/dashboard/NutritionSummary";
import RecentActivity from "@/components/dashboard/RecentActivity";
import Card from "@/components/ui/Card";
import {
  Flame,
  Beef,
  Droplets,
  Scale,
} from "lucide-react";
export default function DashboardPage() {
  return (
    <div>
      {/* Welcome */}

      <section className="mb-10">
        <h1 className="text-5xl font-black">
        Good Morning, Vinayak
        </h1>

        <p className="mt-3 text-gray-500">
        Stay consistent. Small improvements every day build extraordinary results.
        </p>
      </section>

      {/* Dashboard Cards */}

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <DashboardCard
  title="Calories"
  value="2450"
  subtitle="2450 / 2800 kcal"
  icon={Flame}
/>

<DashboardCard
  title="Protein"
  value="160 g"
  subtitle="160 / 180 g"
  icon={Beef}
/>

<DashboardCard
  title="Water"
  value="3.2 L"
  subtitle="Goal: 4 L"
  icon={Droplets}
/>

<DashboardCard
  title="Weight"
  value="72 kg"
  subtitle="-0.4 kg this week"
  icon={Scale}
/>
      </section>

      {/* Main Dashboard */}

      <section className="mt-12 grid gap-8 lg:grid-cols-3">
        {/* Left */}

        <div className="space-y-8 lg:col-span-2">
          <TodayWorkout />

          <RecentActivity />
        </div>

        {/* Right */}

        <div className="space-y-8">
          <Card>
            <h2 className="text-2xl font-black">
              Weekly Goal
            </h2>

            <p className="mt-4 text-gray-500">
              Complete 4 of 6 workouts this week.
            </p>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-2/3 rounded-full bg-black" />
            </div>
          </Card>

          <NutritionSummary />

          <Card>
            <h2 className="text-2xl font-black">
              Quick Actions
            </h2>

            <div className="mt-6 flex flex-col gap-4">
              <QuickAction title="Log Workout" />
              <QuickAction title="Add Meal" />
              <QuickAction title="Update Weight" />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}