import { Gamepad2, Shield, Zap, Globe, Headphones, TrendingUp } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Gamepad2,
      title: 'Complete Game Coverage',
      description: 'Access live casino, sports betting, slots, poker, lottery, and esports through a single API. 30,000+ games from 100+ providers.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption, multi-layer security protocols, and 99.9% uptime SLA. Fully compliant with international regulations.',
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Standardized REST API with comprehensive documentation. Launch your platform in 3 days with full technical support.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Support for 20+ languages and 50+ currencies. CDN infrastructure ensuring low latency worldwide.',
    },
    {
      icon: Headphones,
      title: '24/7 Expert Support',
      description: 'Dedicated account manager and technical team. Multi-channel support via Telegram, WhatsApp, and email.',
    },
    {
      icon: TrendingUp,
      title: 'DB White Label',
      description: 'Complete turnkey platform with frontend, backend, and admin tools. Launch your branded gaming site in weeks.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full mb-4 border border-secondary/20">
            <span className="text-sm font-medium">Platform Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose DB Gaming
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Industry-leading iGaming API platform designed to help you launch and scale your gaming business
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all hover:border-secondary/50"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Icon className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
