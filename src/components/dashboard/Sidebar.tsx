import {
  LayoutDashboard,
  Dumbbell,
  UtensilsCrossed,
  ChartColumn,
  Settings,
  User,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Workouts", icon: Dumbbell },
  { name: "Nutrition", icon: UtensilsCrossed },
  { name: "Progress", icon: ChartColumn },
  { name: "Profile", icon: User },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-72 border-r border-gray-800 bg-[#111111] p-8 text-white">
      <h1 className="mb-12 text-3xl font-black tracking-tight">
        BT.
      </h1>

      <nav className="space-y-2">
        {menu.map(({ name, icon: Icon }) => (
          <button
            key={name}
            className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left transition ${
              name === "Dashboard"
                ? "bg-white text-black"
                : "hover:bg-[#222]"
            }`}
          >
            <Icon size={20} />
            <span>{name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}