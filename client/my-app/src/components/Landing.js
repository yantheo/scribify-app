import { Globe, Users, Plane, ArrowRight, Zap } from 'lucide-react';

const Landing = ({ onGetStarted }) => {
  const useCases = [
    {
      icon: Plane,
      title: 'Travel',
      description: 'Communicate without language barriers during your trips. Record and translate instantly.',
    },
    {
      icon: Users,
      title: 'Meetings',
      description: 'Capture the key takeaways from your meetings and generate accurate transcripts for your archives.',
    },
    {
      icon: Globe,
      title: 'Family',
      description: 'Share your precious moments by transcribing and translating your family conversations.',
    },
  ];

  return (
    // Fond clair (blanc cassé) et dégradé subtil
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      <div className="relative z-10">
        <div className="container mx-auto px-6">

          {/* Section Héro - Thème clair */}
          <section className="py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Tag / Bandeau */}
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-300">
                <span className="flex items-center space-x-2 text-emerald-700 text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  <span>Advanced AI Technology</span>
                </span>
              </div>

              {/* Titre Principal (Couleur sombre) */}
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
                You Speak,
                <span className="block">We Transcribe</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light">
                Transform your voice into text. Anywhere, anytime.
              </p>
              <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
                Scribify is the ultimate application for transcribing audio into text, translated into any language. Communicate without linguistic limits.
              </p>
              
              {/* Bouton CTA - Couleur Émeraude (du Transcriber original) */}
              <button
                onClick={onGetStarted}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 transform transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </section>

          {/* Section Cas d'Utilisation */}
          <section className="py-20 md:py-32">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Use Cases
                </h2>
                <p className="text-lg text-slate-600">
                  Discover how Scribify transforms your moments
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => {
                  const Icon = useCase.icon;
                  return (
                    <div
                      key={index}
                      // Carte blanche avec une légère ombre et bordure
                      className="p-8 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl hover:shadow-emerald-100 transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Icône émeraude */}
                      <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100">
                        <Icon className="w-7 h-7 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {useCase.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Section Call to Action - Bloc distinctif */}
          <section className="py-20 md:py-24 bg-slate-100 rounded-3xl my-12 md:my-16 border border-slate-200 shadow-xl">
            <div className="max-w-3xl mx-auto text-center px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Ready to transform your voice?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Join thousands of users who are already easily transcribing their conversations.
              </p>
              
              {/* Bouton CTA - Émeraude */}
              <button
                onClick={onGetStarted}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 transform transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span>Start for free</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </section>

          {/* Section Fonctionnalités Clés */}
          <section className="py-20 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Carte fonctionnalité - blanc simple */}
              <div className="text-left p-6 rounded-xl border border-slate-200 bg-white shadow-md">
                <h3 className="font-bold text-slate-900 mb-1">Accurate Transcription</h3>
                <p className="text-slate-600">Instant conversion of your audio into text</p>
              </div>
              <div className="text-left p-6 rounded-xl border border-slate-200 bg-white shadow-md">
                <h3 className="font-bold text-slate-900 mb-1">Easy Listening</h3>
                <p className="text-slate-600">Review and listen to your recordings anytime</p>
              </div>
              <div className="text-left p-6 rounded-xl border border-slate-200 bg-white shadow-md">
                <h3 className="font-bold text-slate-900 mb-1">Multilingual</h3>
                <p className="text-slate-600">Support for all major languages</p>
              </div>
              <div className="text-left p-6 rounded-xl border border-slate-200 bg-white shadow-md">
                <h3 className="font-bold text-slate-900 mb-1">Free and Simple</h3>
                <p className="text-slate-600">No complex sign-up, immediate access</p>
              </div>
            </div>
          </section>
        </div>

        <footer className="border-t border-slate-200 mt-20 py-8 text-center text-slate-500 relative z-10">
          <p>&copy; 2024 Scribify. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Landing;