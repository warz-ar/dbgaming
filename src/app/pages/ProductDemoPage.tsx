import { ArrowLeft, Play, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';

export function ProductDemoPage() {
  const { t } = useLanguage();

  const demoGames = [
    {
      category: t('demo.liveCasino'),
      games: [
        { name: 'Baccarat', provider: 'Evolution Gaming', image: '🎴' },
        { name: 'Blackjack', provider: 'Pragmatic Play', image: '🃏' },
        { name: 'Roulette', provider: 'Asia Gaming', image: '🎰' },
        { name: 'Dragon Tiger', provider: 'SA Gaming', image: '🐉' },
      ],
    },
    {
      category: t('demo.sportsBetting'),
      games: [
        { name: 'Football Betting', provider: 'IM Sports', image: '⚽' },
        { name: 'Basketball', provider: 'SBO Sports', image: '🏀' },
        { name: 'Live Betting', provider: 'BTI Sports', image: '🎯' },
        { name: 'Esports', provider: 'IM Sports', image: '🎮' },
      ],
    },
    {
      category: t('demo.slotGames'),
      games: [
        { name: 'Gates of Olympus', provider: 'Pragmatic Play', image: '⚡' },
        { name: 'Sweet Bonanza', provider: 'Pragmatic Play', image: '🍭' },
        { name: 'Fortune Tiger', provider: 'PG Soft', image: '🐯' },
        { name: 'Mahjong Ways', provider: 'PG Soft', image: '🀄' },
      ],
    },
  ];

  return (
    <div className="pt-20 pb-12">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors">
          <ArrowLeft size={20} />
          {t('nav.backToHome')}
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full mb-4 border border-secondary/20">
            <span className="text-sm font-medium">{t('demo.badge')}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {t('demo.title')}
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('demo.subtitle')}
          </p>
        </div>
      </div>

      {/* Demo Games Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {demoGames.map((category, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Gamepad2 className="text-secondary" size={28} />
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.games.map((game, gameIdx) => (
                <div
                  key={gameIdx}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:border-secondary/50 hover:-translate-y-1"
                >
                  <div className="text-6xl mb-4 text-center">{game.image}</div>
                  <h3 className="text-lg font-semibold mb-2">{game.name}</h3>
                  <p className="text-sm text-foreground/60 mb-4">by {game.provider}</p>
                  <button
                    type="button"
                    className="w-full px-4 py-2 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:bg-secondary group-hover:text-white"
                  >
                    <Play size={16} />
                    {t('demo.playDemo')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('demo.ctaTitle')}</h2>
          <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
            {t('demo.ctaSubtitle')}
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors shadow-md"
            >
              {t('nav.requestDemo')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
