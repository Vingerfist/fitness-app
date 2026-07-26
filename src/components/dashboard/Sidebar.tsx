export default function Sidebar() {
    const menu = [
      "Dashboard",
      "Workouts",
      "Nutrition",
      "Progress",
      "Analytics",
      "Settings",
    ];
  
    return (
      <aside className="w-64 min-h-screen bg-[#111111] text-white p-6">
        <h1 className="text-3xl font-black mb-10">
          BT.
        </h1>
  
        <nav className="space-y-3">
          {menu.map((item) => (
            <button
              key={item}
              className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-[#232323]"
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>
    );
  }