export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
  
          <h1 className="text-2xl font-bold text-white">
            Biceps<span className="text-blue-500">Triceps</span>
          </h1>
  
          <div className="hidden gap-8 text-gray-300 md:flex">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
          </div>
  
          <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700">
            Get Started
          </button>
  
        </div>
      </nav>
    );
  }