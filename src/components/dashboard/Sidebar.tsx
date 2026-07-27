import {
  LayoutDashboard,
  Dumbbell,
  UtensilsCrossed,
  ChartColumn,
  Settings,
  User,
} from "lucide-react"; 
import Link from "next/link";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Workouts",
    href: "/workouts",
    icon: Dumbbell,
  },
  {
    name: "Nutrition",
    href: "/nutrition",
    icon: UtensilsCrossed,
  },
  {
    name: "Progress",
    href: "/progress",
    icon: ChartColumn,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-72 border-r border-gray-800 bg-[#111111] p-8 text-white">
      <h1 className="mb-12 text-3xl font-black tracking-tight">
        BT.
      </h1>

      <nav className="space-y-2">
      {menu.map(({ name, href, icon: Icon }) => (
  <Link
    key={name}
    href={href}
    className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 transition ${
      name === "Dashboard"
        ? "bg-white text-black"
        : "hover:bg-[#222]"
    }`}
  >
    <Icon size={20} />
    <span>{name}</span>
  </Link>
))}
      </nav>
    </aside>
  );
}