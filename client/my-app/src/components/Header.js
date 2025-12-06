import { MicVocal } from 'lucide-react';

const Header = ({ onGetStarted }) => {
  return (
    // Fond sombre et sobre (slate-900/800)
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 backdrop-blur-md bg-opacity-90 border-b border-slate-700 sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo Émeraude */}
          <a href="/" className="flex items-center space-x-2 group">
            <div className="bg-emerald-500 p-2 rounded-lg group-hover:bg-emerald-600 transition-colors">
              <MicVocal className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Scribify</span>
          </a>

          {/* Bouton CTA - Changé en Émeraude (Vert) */}
          <button
            onClick={onGetStarted}
            // Changement ici : Remplacement des classes "blue" par "emerald"
            className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-emerald-500/20 active:scale-[0.98]"
          >
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;