import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Newspaper } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import {
  collectYears,
  fetchIndustryInfoNews,
  fetchLatestNews,
  filterArticlesByYear,
  formatNewsDate,
  getArticleExcerpt,
  getArticleImage,
  getLocalizedText,
  getNewsLangKey,
} from '../services/industryNewsApi';
import type { IndustryNewsArticle } from '../types/industryNews';

const PAGE_SIZE = 10;

function NewsCard({
  article,
  lang,
  language,
  source,
  readMoreLabel,
}: {
  article: IndustryNewsArticle;
  lang: ReturnType<typeof getNewsLangKey>;
  language: 'en' | 'zh';
  source: 'activities' | 'artical';
  readMoreLabel: string;
}) {
  const title = getLocalizedText(article.mulit_language_title, lang);
  const image = getArticleImage(article, lang);
  const excerpt = getArticleExcerpt(article, lang);
  const dateLabel = formatNewsDate(article.date, language);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
      <Link to={`/industry-news/${source}/${article._id}`} className="block">
        <div className="aspect-[16/9] overflow-hidden bg-muted">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
              <Newspaper className="text-secondary/60" size={48} />
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <time className="mb-3 text-sm text-muted-foreground">{dateLabel}</time>
        <h3 className="mb-3 text-xl font-semibold leading-snug transition-colors group-hover:text-secondary">
          <Link to={`/industry-news/${source}/${article._id}`}>{title}</Link>
        </h3>
        {excerpt && (
          <p className="mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-foreground/70">
            {excerpt}
          </p>
        )}
        <Link
          to={`/industry-news/${source}/${article._id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
        >
          {readMoreLabel}
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export function IndustryNewsPage() {
  const { language, t } = useLanguage();
  const lang = getNewsLangKey(language);

  const [industryArticles, setIndustryArticles] = useState<IndustryNewsArticle[]>([]);
  const [latestArticles, setLatestArticles] = useState<IndustryNewsArticle[]>([]);
  const [page, setPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadIndustryInfo() {
      try {
        const items = await fetchIndustryInfoNews(language);
        if (!cancelled) setIndustryArticles(items);
      } catch {
        if (!cancelled) setIndustryArticles([]);
      }
    }

    loadIndustryInfo();
    return () => {
      cancelled = true;
    };
  }, [language]);

  useEffect(() => {
    let cancelled = false;

    async function loadLatestNews() {
      setLoading(true);
      setError(null);

      try {
        const { items } = await fetchLatestNews(language, 1, 147);
        if (!cancelled) {
          setLatestArticles(items);
        }
      } catch {
        if (!cancelled) {
          setError(t('industryNews.error'));
          setLatestArticles([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadLatestNews();
    return () => {
      cancelled = true;
    };
  }, [language, t]);

  const yearOptions = useMemo(() => collectYears(latestArticles), [latestArticles]);

  const filteredLatest = useMemo(
    () => filterArticlesByYear(latestArticles, selectedYear),
    [latestArticles, selectedYear],
  );

  const totalPages = Math.max(1, Math.ceil(filteredLatest.length / PAGE_SIZE));

  const paginatedLatest = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredLatest.slice(start, start + PAGE_SIZE);
  }, [filteredLatest, page]);

  const handleYearChange = (year: number | 'all') => {
    setSelectedYear(year);
    setPage(1);
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} />
          {t('nav.backToHome')}
        </Link>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">{t('industryNews.title')}</h1>
          <p className="text-lg text-foreground/70 leading-relaxed">{t('industryNews.subtitle')}</p>
        </div>
      </section>

      {industryArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2">
                {t('industryNews.industryInfoBadge')}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold">{t('industryNews.industryInfoTitle')}</h2>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {industryArticles.map((article) => (
              <NewsCard
                key={article._id}
                article={article}
                lang={lang}
                language={language}
                source="artical"
                readMoreLabel={t('industryNews.readMore')}
              />
            ))}
          </div>
        </section>
      )}

      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2">
              {t('industryNews.latestNewsBadge')}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">{t('industryNews.latestNewsTitle')}</h2>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleYearChange('all')}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedYear === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background border border-border text-foreground/70 hover:border-secondary/40'
                }`}
              >
                {t('industryNews.filterAll')}
              </button>
              {yearOptions.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => handleYearChange(year)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedYear === year
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background border border-border text-foreground/70 hover:border-secondary/40'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <p className="mb-8 text-sm text-muted-foreground">
            {t('industryNews.resultsCount').replace('{count}', String(filteredLatest.length))}
          </p>

          {loading ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[420px] animate-pulse rounded-2xl border border-border bg-card"
                />
              ))}
            </div>
          ) : error ? (
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-8 text-center text-destructive">
              {error}
            </div>
          ) : filteredLatest.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-12 text-center text-foreground/70">
              {t('industryNews.empty')}
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {paginatedLatest.map((article) => (
                <NewsCard
                  key={article._id}
                  article={article}
                  lang={lang}
                  language={language}
                  source="activities"
                  readMoreLabel={t('industryNews.readMore')}
                />
              ))}
            </div>
          )}

          {!loading && !error && totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-3">
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40 hover:bg-background"
              >
                <ChevronLeft size={16} />
                {t('industryNews.previous')}
              </button>
              <span className="px-3 text-sm text-muted-foreground">
                {page} / {totalPages}
              </span>
              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40 hover:bg-background"
              >
                {t('industryNews.next')}
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/85 px-8 py-12 text-center text-primary-foreground sm:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{t('industryNews.subscribeTitle')}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
            {t('industryNews.subscribeSubtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            {t('industryNews.contactUs')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
