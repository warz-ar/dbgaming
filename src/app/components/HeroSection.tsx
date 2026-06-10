import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';

const HERO_VIDEO_URL = 'https://assets-video.dbsportxxx3pk.com/video/dbgaming/Chinese-2.mp4';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full mb-6 border border-white/20 backdrop-blur-sm">
                <span className="text-sm font-medium">{t('hero.badge')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                {t('hero.title')}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  {' '}{t('hero.titleHighlight')}{' '}
                </span>
              </h1>

              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: '99.9% Uptime', desc: '24/7 uninterrupted service' },
                  { title: 'Rapid Integration', desc: 'Go live in 3 days' },
                  { title: '30,000+ Games', desc: 'Single API integration' },
                  { title: 'Expert Support', desc: 'Dedicated account manager' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium mb-1 text-white">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="group px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  {t('hero.requestDemo')}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <Link
                  to="/product-demo"
                  className="px-8 py-4 bg-white/10 border-2 border-white/40 text-white rounded-lg hover:bg-white/20 transition-colors text-center backdrop-blur-sm"
                >
                  {t('hero.tryDemo')}
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '500+', label: t('hero.operators'), sub: 'Worldwide' },
                { value: '30K+', label: t('hero.games'), sub: 'Available' },
                { value: '99.9%', label: t('hero.uptime'), sub: 'SLA' },
                { value: '24/7', label: t('hero.support'), sub: 'Expert Team' },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all"
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-white/90 font-medium">{stat.label}</p>
                  <p className="text-sm text-white/50 mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
