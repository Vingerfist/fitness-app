export default function Topbar() {
    return (
      <header className="flex h-20 items-center justify-between border-b bg-white px-8">
        <h2 className="text-3xl font-black">
          Dashboard
        </h2>
  
        <div className="flex items-center gap-4">
          <input
            placeholder="Search..."
            className="rounded-xl border px-4 py-2"
          />
  
          <div className="h-11 w-11 rounded-full bg-black" />
        </div>
      </header>
    );
  }