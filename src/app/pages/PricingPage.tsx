import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router';

export function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for new operators testing the market',
      features: [
        'Up to 5,000 games',
        'Basic API access',
        'Email support',
        'Monthly reports',
        'Standard integration',
        'Community access',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing gaming platforms',
      features: [
        'Full 30,000+ game library',
        'Priority API access',
        '24/7 support',
        'Real-time analytics',
        'Custom integration',
        'Dedicated account manager',
        'White-label options',
        'Multiple currencies',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale operations with custom needs',
      features: [
        'Everything in Professional',
        'Custom game development',
        'SLA guarantees',
        'On-premise deployment',
        'Custom reporting',
        'Compliance support',
        'Revenue share options',
        'Priority feature requests',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const addons = [
    {
      name: 'Premium Support',
      price: '$1,500/month',
      description: 'Dedicated support team with 1-hour response time',
    },
    {
      name: 'Custom Branding',
      price: '$3,000 one-time',
      description: 'Full white-label customization and branding',
    },
    {
      name: 'Advanced Analytics',
      price: '$999/month',
      description: 'AI-powered insights and predictive analytics',
    },
    {
      name: 'Additional Markets',
      price: '$500/market/month',
      description: 'Licensing and compliance support per market',
    },
  ];

  return (
    <div className="pt-20 pb-12">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full mb-4 border border-secondary/20">
            <span className="text-sm font-medium">Transparent Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Choose Your Plan
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Simple, transparent pricing that scales with your business. No hidden fees.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-card border rounded-2xl p-8 hover:shadow-xl transition-all ${
                plan.popular
                  ? 'border-secondary shadow-lg scale-105'
                  : 'border-border hover:border-secondary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/70 text-sm">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                <span className="text-foreground/70">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-2">
                    <Check className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block w-full px-6 py-3 rounded-lg text-center font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-md'
                    : 'bg-secondary/10 text-secondary hover:bg-secondary hover:text-white'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Add-ons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Optional Add-ons</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {addons.map((addon, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-secondary/50"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">{addon.name}</h3>
                <span className="text-secondary font-semibold">{addon.price}</span>
              </div>
              <p className="text-foreground/70 text-sm">{addon.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-2">Is there a setup fee?</h3>
            <p className="text-foreground/70 text-sm">
              No setup fees for Starter and Professional plans. Enterprise plans may have custom
              integration costs based on requirements.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-2">Can I change plans later?</h3>
            <p className="text-foreground/70 text-sm">
              Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the
              start of your next billing cycle.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
            <p className="text-foreground/70 text-sm">
              We accept bank transfers, credit cards, and cryptocurrency for Enterprise plans.
              Payment terms are flexible for annual contracts.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-2">Is there a free trial?</h3>
            <p className="text-foreground/70 text-sm">
              Yes, we offer a 14-day free trial on all plans with full access to features. No credit
              card required.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
            Our sales team is here to help you find the perfect plan for your business.
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
              Try Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
