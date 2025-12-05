import { Mic2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2 group">
            <div className="bg-emerald-500 p-2 rounded-lg group-hover:bg-emerald-600 transition-colors">
              <Mic2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Scribify</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
