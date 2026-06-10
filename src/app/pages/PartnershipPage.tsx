import { ArrowLeft, Shield, TrendingUp, Zap, Globe, Users, Award } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';

export function PartnershipPage() {
  const { t } = useLanguage();
  const partnershipModels = [
    {
      title: 'White Label Solution',
      description: 'Launch your branded gaming platform in weeks',
      features: [
        'Full platform customization',
        'Your branding & domain',
        'Complete game library access',
        'Dedicated support team',
      ],
      icon: Shield,
    },
    {
      title: 'Revenue Share',
      description: 'Grow together with flexible revenue models',
      features: [
        'No upfront costs',
        'Competitive revenue splits',
        'Monthly payouts',
        'Transparent reporting',
      ],
      icon: TrendingUp,
    },
    {
      title: 'API Integration',
      description: 'Seamlessly integrate our game content',
      features: [
        'RESTful API access',
        'Real-time game updates',
        'Full technical documentation',
        'Developer support',
      ],
      icon: Zap,
    },
  ];

  const benefits = [
    { icon: Globe, title: '150+ Markets', description: 'Global licensing coverage' },
    { icon: Users, title: '500+ Operators', description: 'Trusted by industry leaders' },
    { icon: Award, title: '99.9% Uptime', description: 'Enterprise-grade reliability' },
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
            <span className="text-sm font-medium">{t('partnership.badge')}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {t('partnership.title')}
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('partnership.subtitle')}
          </p>
        </div>
      </div>

      {/* Partnership Models */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {partnershipModels.map((model, idx) => {
            const Icon = model.icon;
            return (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all hover:border-secondary/50 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-secondary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{model.title}</h3>
                <p className="text-foreground/70 mb-6">{model.description}</p>
                <ul className="space-y-3">
                  {model.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-secondary/5 to-accent/5 border border-secondary/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-secondary" size={28} />
                  </div>
                  <div className="text-2xl font-bold text-secondary mb-2">{benefit.title}</div>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner?</h2>
          <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
            Join 500+ successful operators worldwide. Let's discuss the best partnership model for your business.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors shadow-md"
            >
              Contact Sales
            </Link>
            <Link
              to="/product-demo"
              className="px-8 py-4 bg-background border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition-colors"
            >
              {t('common.tryDemo')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
