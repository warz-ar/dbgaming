import { ArrowLeft, ArrowUpRight, Play } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { gameProducts } from '../data/gameProducts';

export function ProductPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors"
        >
          <ArrowLeft size={20} />
          {t('nav.backToHome')}
        </Link>
      </div>

      {/* Hero — frosted glass */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-black to-orange-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.18),transparent_55%)]" />
        <div className="relative bg-black/35 backdrop-blur-2xl border-b border-white/10 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                {t('product.badge')}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{t('product.title')}</h1>
              <p className="text-lg text-white/70 leading-relaxed">{t('product.subtitle')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product list */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-6">
          {gameProducts.map((product, index) => {
            const Icon = product.icon;

            return (
              <article
                key={product.id}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="grid lg:grid-cols-[280px_1fr]">
                  {/* Visual */}
                  <div
                    className={`relative flex min-h-[180px] items-center justify-center bg-gradient-to-br ${product.gradient} lg:min-h-[220px]`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative flex flex-col items-center gap-3 px-6 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20">
                        <Icon className="text-white" size={32} />
                      </div>
                      <span className="text-xs font-medium uppercase tracking-wider text-white/80">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-6 sm:p-8">
                    <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0 flex-1">
                        <h2 className="text-2xl font-bold mb-3">{t(product.titleKey)}</h2>
                        <p className="text-foreground/70 leading-relaxed">{t(product.descKey)}</p>
                      </div>
                      <Link
                        to={product.demoHref}
                        className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                      >
                        <Play size={16} />
                        {t('product.tryPlay')}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA — frosted glass */}
      <section className="relative overflow-hidden mt-4">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-black to-orange-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.16),transparent_55%)]" />
        <div className="relative bg-black/35 backdrop-blur-2xl border-t border-white/10 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{t('product.ctaTitle')}</h2>
              <p className="text-white/70">{t('product.ctaSubtitle')}</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              {t('common.contactSales')}
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
