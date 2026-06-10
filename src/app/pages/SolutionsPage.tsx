import { ArrowLeft, Gamepad2, BarChart3, Smartphone, Lock, Headphones, Zap } from 'lucide-react';
import { Link } from 'react-router';

export function SolutionsPage() {
  const solutions = [
    {
      icon: Gamepad2,
      title: 'Complete Game Library',
      description: 'Access 30,000+ games from top providers including Evolution, Pragmatic Play, NetEnt, and more.',
      features: [
        'Live Casino games',
        'Sports betting platform',
        'Slot machines',
        'Poker & card games',
        'Lottery systems',
        'Esports betting',
      ],
    },
    {
      icon: Zap,
      title: 'Rapid Integration',
      description: 'Get up and running in just 3 days with our streamlined API and comprehensive documentation.',
      features: [
        'RESTful API architecture',
        'Single integration point',
        'Pre-built SDKs',
        'Code examples & tutorials',
        'Sandbox environment',
        'Migration assistance',
      ],
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance support for 150+ markets worldwide.',
      features: [
        'SSL/TLS encryption',
        'Two-factor authentication',
        'DDoS protection',
        'Regular security audits',
        'Compliance certifications',
        'Data privacy (GDPR)',
      ],
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time insights and reporting to optimize your gaming operations.',
      features: [
        'Player behavior analytics',
        'Revenue tracking',
        'Custom dashboards',
        'Automated reporting',
        'API usage metrics',
        'Performance monitoring',
      ],
    },
    {
      icon: Smartphone,
      title: 'Multi-Platform Support',
      description: 'Seamless experience across all devices with responsive design and native apps.',
      features: [
        'Desktop browsers',
        'iOS & Android apps',
        'Responsive web design',
        'Cross-device sync',
        'Progressive Web Apps',
        'Smart TV support',
      ],
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated technical support team ready to help whenever you need assistance.',
      features: [
        'Round-the-clock availability',
        'Multi-language support',
        'Dedicated account manager',
        'Priority issue resolution',
        'Technical documentation',
        'Developer community',
      ],
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
            <span className="text-sm font-medium">Complete Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything You Need to Succeed
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive gaming solutions designed to power your business. From games to analytics, we've got you covered.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all hover:border-secondary/50 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-foreground/70 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
            Experience our solutions firsthand. Request a demo or try our products online.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors shadow-md"
            >
              Request Demo
            </Link>
            <Link
              to="/product-demo"
              className="px-8 py-4 bg-background border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition-colors"
            >
              Try Product Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
