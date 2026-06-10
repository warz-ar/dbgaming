import { Dices, Target, Smartphone, Trophy, Ticket, Swords } from 'lucide-react';

export function GamesSection() {
  const gameCategories = [
    {
      icon: Dices,
      title: 'Live Casino',
      games: '5,000+ Games',
      description: 'Baccarat, Blackjack, Roulette, Poker, and more from top providers like Evolution, Pragmatic Play, and Asia Gaming.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Target,
      title: 'Sports Betting',
      games: '40,000+ Events/Month',
      description: 'Pre-match and live betting on football, basketball, tennis, and 30+ sports with competitive odds.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Smartphone,
      title: 'Slots & Games',
      games: '15,000+ Titles',
      description: 'Video slots, classic slots, and instant win games from NetEnt, Microgaming, Playtech, and 100+ providers.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Trophy,
      title: 'Poker & Cards',
      games: '200+ Tables',
      description: 'Texas Hold\'em, Omaha, Chinese Poker, and more. Cash games and tournaments available 24/7.',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Ticket,
      title: 'Lottery & Keno',
      games: '50+ Games',
      description: 'Traditional lottery, instant lottery, and keno games with customizable draw schedules and prize structures.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Swords,
      title: 'Esports',
      games: '1,000+ Events/Month',
      description: 'Betting on Dota 2, CS:GO, League of Legends, and more. Live streaming and real-time odds.',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <section id="games" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full mb-4 border border-accent/20">
            <span className="text-sm font-medium">Game Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Complete Game Library
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Access over 30,000 games from the world's leading providers through a single API integration
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all hover:border-primary/30 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <div className="text-sm font-medium text-accent mb-3">{category.games}</div>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Provider Logos Section */}
        <div className="mt-16 text-center">
          <p className="text-sm text-foreground/60 mb-6">Partnered with 100+ Leading Providers</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {['Evolution', 'Pragmatic Play', 'NetEnt', 'Microgaming', 'Playtech', 'Asia Gaming', 'SA Gaming', 'Ezugi'].map((provider) => (
              <div key={provider} className="px-6 py-3 bg-card border border-border rounded-lg">
                <span className="font-medium text-foreground/80">{provider}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
