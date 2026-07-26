export default function RecentActivity() {
    const activities = [
      "Completed Push Workout",
      "Logged Breakfast",
      "Updated Weight",
    ];
  
    return (
      <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-black">
          Recent Activity
        </h2>
  
        <div className="mt-6 space-y-4">
          {activities.map((activity) => (
            <div
              key={activity}
              className="rounded-xl border p-4"
            >
              {activity}
            </div>
          ))}
        </div>
      </section>
    );
  }