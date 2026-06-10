import { Star, Users, TrendingUp, Award } from 'lucide-react';

export function CasesSection() {
  const stats = [
    { icon: Users, value: '500+', label: 'Partners' },
    { icon: TrendingUp, value: '$5B+', label: 'Monthly GGR' },
    { icon: Award, value: '5+ Years', label: 'Industry Experience' },
    { icon: Star, value: '4.9/5', label: 'Customer Rating' },
  ];

  const testimonials = [
    {
      company: 'Southeast Asian Gaming Platform',
      location: 'Philippines',
      quote: 'We\'ve been using DB Gaming\'s API for over 2 years. The system is incredibly stable and technical support is very responsive. Our monthly GGR grew from $1M to $5M+. DB Gaming has been instrumental in our success.',
      author: 'Alex Chen',
      role: 'CTO',
      rating: 5,
    },
    {
      company: 'Singapore Entertainment Group',
      location: 'Singapore',
      quote: 'We chose DB Gaming for their extensive game library and competitive pricing. Integration was smooth - we were live in 3 days. Player feedback on game quality has been excellent, especially the 4K live casino.',
      author: 'Sarah Lim',
      role: 'Operations Manager',
      rating: 5,
    },
    {
      company: 'Vietnam Local Operator',
      location: 'Vietnam',
      quote: 'We\'ve tried several API providers, but DB Gaming is by far the most stable. Most importantly, they support Vietnamese interface and VND settlement, perfect for our local market.',
      author: 'Nguyen Van',
      role: 'CEO',
      rating: 5,
    },
  ];

  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4 border border-primary/20">
            <span className="text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by 500+ Operators
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Serving partners across Southeast Asia, Europe, and Latin America with consistent 5-star satisfaction
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <p className="text-foreground/70 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-primary text-primary" size={18} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Divider */}
              <div className="h-px bg-border mb-6" />

              {/* Author Info */}
              <div>
                <h4 className="font-semibold mb-1">{testimonial.company}</h4>
                <p className="text-sm text-foreground/60 mb-2">📍 {testimonial.location}</p>
                <p className="text-sm text-foreground/70">
                  {testimonial.author} · {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 bg-gradient-to-r from-muted/50 to-secondary/5 rounded-2xl p-8 border border-border">
          <h3 className="text-center text-lg font-semibold mb-6">Certifications & Compliance</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="px-6 py-3 bg-card border border-border rounded-lg shadow-sm">
              <span className="font-semibold">🏆 PAGCOR Licensed</span>
            </div>
            <div className="px-6 py-3 bg-card border border-border rounded-lg shadow-sm">
              <span className="font-semibold">🔒 ISO 27001 Certified</span>
            </div>
            <div className="px-6 py-3 bg-card border border-border rounded-lg shadow-sm">
              <span className="font-semibold">✅ GLI-19 Compliant</span>
            </div>
            <div className="px-6 py-3 bg-card border border-border rounded-lg shadow-sm">
              <span className="font-semibold">🛡️ PCI DSS Level 1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
