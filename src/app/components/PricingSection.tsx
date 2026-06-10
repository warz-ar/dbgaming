import { Check, TrendingUp, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function PricingSection() {
  const [selectedCategory, setSelectedCategory] = useState<'sports' | 'live' | 'slot'>('sports');

  const categories = [
    { id: 'sports' as const, label: 'Sports Betting', icon: '⚽' },
    { id: 'live' as const, label: 'Live Casino', icon: '🎰' },
    { id: 'slot' as const, label: 'Slots & Games', icon: '🎮' },
  ];

  const pricingData = {
    sports: [
      { provider: 'IM Sports', rate: '0.6%', features: ['Live Events', 'Parlay Betting', 'Virtual Sports'], recommended: false },
      { provider: 'SBO Sports', rate: '0.8%', features: ['Asian Handicap', 'Live Betting', 'Multi-language'], recommended: true },
      { provider: 'BTI Sports', rate: '0.7%', features: ['Esports Betting', 'Fast Settlement', 'Mobile Optimized'], recommended: false },
    ],
    live: [
      { provider: 'Asia Gaming', rate: '1.0%', features: ['Baccarat', 'Dragon Tiger', 'Roulette'], recommended: false },
      { provider: 'Evolution', rate: '1.2%', features: ['Lightning Series', 'Multi-table', '4K Quality'], recommended: true },
      { provider: 'WM Casino', rate: '0.9%', features: ['Professional Dealers', 'Multi-room', 'Mobile Support'], recommended: false },
    ],
    slot: [
      { provider: 'PG Soft', rate: '3.0%', features: ['High RTP', 'Innovative Gameplay', 'HD Graphics'], recommended: false },
      { provider: 'Pragmatic Play', rate: '3.5%', features: ['Jackpot Games', 'Free Spins', 'Popular IPs'], recommended: true },
      { provider: 'JDB Gaming', rate: '2.8%', features: ['Asian Themes', 'Fast Games', 'Progressive Jackpots'], recommended: false },
    ],
  };

  const currentData = pricingData[selectedCategory];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full mb-4 border border-accent/20">
            <span className="text-sm font-medium">Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Flexible Pricing Plans
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Clear, transparent pricing structure with custom plans based on your volume
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card border border-border text-foreground hover:bg-accent'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {currentData.map((item, index) => (
            <div
              key={index}
              className={`bg-card border-2 rounded-2xl p-8 transition-all ${
                item.recommended
                  ? 'border-accent shadow-xl scale-105'
                  : 'border-border hover:border-accent/50 hover:shadow-lg'
              }`}
            >
              {item.recommended && (
                <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full mb-4 font-medium">
                  Recommended
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{item.provider}</h3>

              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-accent">{item.rate}</span>
                <span className="text-foreground/60 ml-2">commission</span>
              </div>

              <ul className="space-y-3 mb-8">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  item.recommended
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-md'
                    : 'bg-muted text-foreground hover:bg-muted/80 border border-border'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-secondary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Need a Custom Plan?</h3>
                <p className="text-foreground/70">
                  Get volume-based discounts and custom revenue share models. VIP pricing available for $10M+ monthly GGR.
                </p>
              </div>
            </div>
            <button
              onClick={scrollToContact}
              className="group px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all flex items-center gap-2 whitespace-nowrap shadow-md"
            >
              Get Custom Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
