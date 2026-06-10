import { ArrowLeft, Target, Lightbulb, Shield, Gamepad2, Layers, Globe, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutUsPage() {
  const { t } = useLanguage();

  const stats = [
    { value: '500+', label: t('about.stats.operators') },
    { value: '30K+', label: t('about.stats.games') },
    { value: '100+', label: t('about.stats.providers') },
    { value: '150+', label: t('about.stats.markets') },
  ];

  const pillars = [
    { icon: Target, title: t('about.pillar.expertise'), desc: t('about.pillar.expertiseDesc') },
    { icon: Lightbulb, title: t('about.pillar.innovation'), desc: t('about.pillar.innovationDesc') },
    { icon: Shield, title: t('about.pillar.security'), desc: t('about.pillar.securityDesc') },
  ];

  const projects = [
    { icon: Layers, title: t('about.project.dbWl'), desc: t('about.project.dbWlDesc') },
    { icon: Gamepad2, title: t('about.project.gameApi'), desc: t('about.project.gameApiDesc') },
    { icon: Globe, title: t('about.project.kmSports'), desc: t('about.project.kmSportsDesc') },
    { icon: Building2, title: t('about.project.kmCpLive'), desc: t('about.project.kmCpLiveDesc') },
    { icon: Users, title: t('about.project.boya'), desc: t('about.project.boyaDesc') },
    { icon: Shield, title: t('about.project.liveApi'), desc: t('about.project.liveApiDesc') },
  ];

  const milestones = [
    { year: '2015', month: t('about.timeline.2015.month'), title: t('about.timeline.2015.title'), desc: t('about.timeline.2015.desc') },
    { year: '2017', month: t('about.timeline.2017.month'), title: t('about.timeline.2017.title'), desc: t('about.timeline.2017.desc') },
    { year: '2019', month: t('about.timeline.2019.month'), title: t('about.timeline.2019.title'), desc: t('about.timeline.2019.desc') },
    { year: '2021', month: t('about.timeline.2021.month'), title: t('about.timeline.2021.title'), desc: t('about.timeline.2021.desc') },
    { year: '2024', month: t('about.timeline.2024.month'), title: t('about.timeline.2024.title'), desc: t('about.timeline.2024.desc') },
    { year: '2026', month: t('about.timeline.2026.month'), title: t('about.timeline.2026.title'), desc: t('about.timeline.2026.desc') },
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

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
            {t('about.badge')}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-lg text-foreground/70 leading-relaxed">{t('about.intro')}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-foreground/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-muted/30 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('about.profileTitle')}</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">{t('about.profileP1')}</p>
            <p className="text-foreground/70 leading-relaxed">{t('about.profileP2')}</p>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 border border-border rounded-2xl p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
              {t('about.missionLabel')}
            </p>
            <blockquote className="text-2xl font-bold leading-snug">
              {t('about.mission')}
            </blockquote>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-muted/30 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('about.projectsTitle')}</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">{t('about.projectsSubtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-secondary/40 transition-all"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{project.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70 mb-4">
            {t('about.visionLabel')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold max-w-3xl mx-auto leading-snug">
            {t('about.vision')}
          </h2>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('about.historyTitle')}</h2>
          <p className="text-foreground/70">{t('about.historySubtitle')}</p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-8">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative pl-12">
                <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-accent border-2 border-background" />
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-bold text-secondary">{item.year}</span>
                    <span className="text-sm text-foreground/50">{item.month}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('about.ctaTitle')}</h2>
          <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">{t('about.ctaSubtitle')}</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors shadow-md font-medium"
          >
            {t('nav.requestDemo')}
          </Link>
        </div>
      </section>
    </div>
  );
}
