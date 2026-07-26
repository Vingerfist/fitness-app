import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">
      <div>
        <p className="text-sm text-gray-500">
          Good Morning
        </p>

        <h2 className="text-3xl font-black">
          Vinayak
        </h2>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-2 rounded-xl border px-4 py-2">
          <Search size={18} />
          <input
            placeholder="Search"
            className="outline-none"
          />
        </div>

        <button className="rounded-xl border p-3">
          <Bell size={20} />
        </button>

        <div className="h-11 w-11 rounded-full bg-black" />

      </div>
    </header>
  );
}