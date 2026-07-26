export default function Footer() {
    return (
      <footer className="border-t border-gray-200 bg-[#f8f7f4] py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div>
            <h3 className="text-2xl font-black">BT.</h3>
            <p className="mt-2 text-sm text-gray-500">
              Built for people who want to train smarter.
            </p>
          </div>
  
          <div className="flex gap-8 text-sm font-medium">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </footer>
    );
  }