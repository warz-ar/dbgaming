import { ArrowLeft, TrendingUp, Users, Globe } from 'lucide-react';
import { Link } from 'react-router';

export function CaseStudiesPage() {
  const caseStudies = [
    {
      company: 'BetMax Gaming',
      industry: 'Online Casino',
      region: 'Europe',
      logo: '🎰',
      challenge:
        'Needed to quickly expand game offerings while maintaining platform stability during peak traffic.',
      solution:
        'Integrated DB Gaming API with 15,000+ games and leveraged our CDN infrastructure for global reach.',
      results: [
        { metric: '300%', label: 'Game Library Growth' },
        { metric: '45%', label: 'Player Retention Increase' },
        { metric: '99.9%', label: 'Platform Uptime' },
      ],
      quote:
        'DB Gaming allowed us to scale rapidly without compromising quality. The integration was seamless and support has been exceptional.',
      author: 'Marco Rossi, CTO',
    },
    {
      company: 'SportsBet Pro',
      industry: 'Sports Betting',
      region: 'Asia Pacific',
      logo: '⚽',
      challenge:
        'Required real-time odds updates and multi-sport coverage to compete with established players.',
      solution:
        'Deployed DB Gaming sports betting platform with live data feeds covering 40,000+ monthly events.',
      results: [
        { metric: '2.5x', label: 'Revenue Growth' },
        { metric: '50K+', label: 'Daily Active Users' },
        { metric: '<50ms', label: 'API Response Time' },
      ],
      quote:
        'The real-time capabilities and reliability of DB Gaming platform gave us a competitive edge in the market.',
      author: 'Li Wei, CEO',
    },
    {
      company: 'Lucky Spin Casino',
      industry: 'Mobile Gaming',
      region: 'Latin America',
      logo: '🎲',
      challenge:
        'Mobile-first audience required flawless cross-device experience and local payment integration.',
      solution:
        'Implemented white-label solution with responsive design and regional payment gateway support.',
      results: [
        { metric: '80%', label: 'Mobile Traffic' },
        { metric: '60%', label: 'Faster Time-to-Market' },
        { metric: '35%', label: 'Conversion Rate Increase' },
      ],
      quote:
        'Going mobile-first with DB Gaming white-label solution was the best decision. Launch took weeks instead of months.',
      author: 'Carlos Santos, Product Director',
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
            <span className="text-sm font-medium">Success Stories</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Trusted by Industry Leaders
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            See how operators worldwide are achieving remarkable results with DB Gaming platform.
          </p>
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 space-y-16">
        {caseStudies.map((study, idx) => (
          <div
            key={idx}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all"
          >
            {/* Header */}
            <div className="flex items-start gap-6 mb-8">
              <div className="text-6xl">{study.logo}</div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">{study.company}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                  <span className="flex items-center gap-1">
                    <Globe size={16} className="text-secondary" />
                    {study.region}
                  </span>
                  <span>•</span>
                  <span>{study.industry}</span>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-secondary">Challenge</h3>
                <p className="text-foreground/80">{study.challenge}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-secondary">Solution</h3>
                <p className="text-foreground/80">{study.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-secondary">Results</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {study.results.map((result, resultIdx) => (
                  <div
                    key={resultIdx}
                    className="bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-secondary mb-1">{result.metric}</div>
                    <div className="text-sm text-foreground/70">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-secondary/5 to-accent/5 border-l-4 border-secondary rounded-r-xl p-6">
              <p className="text-lg italic text-foreground/90 mb-3">"{study.quote}"</p>
              <p className="text-sm text-foreground/70">— {study.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Performance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-secondary" size={28} />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <p className="text-foreground/70">Active Operators</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-secondary" size={28} />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">150+</div>
              <p className="text-foreground/70">Markets Worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-secondary" size={28} />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
              <p className="text-foreground/70">Uptime SLA</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
            Join hundreds of successful operators. Let's discuss how DB Gaming can help you achieve your goals.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors shadow-md"
            >
              Get Started
            </Link>
            <Link
              to="/partnership"
              className="px-8 py-4 bg-background border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition-colors"
            >
              Partnership Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
