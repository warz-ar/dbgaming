import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import {
  fetchNewsArticleById,
  formatNewsDate,
  getArticleImage,
  getLocalizedText,
  getNewsLangKey,
} from '../services/industryNewsApi';
import type { IndustryNewsArticle, NewsSource } from '../types/industryNews';

export function IndustryNewsDetailPage() {
  const { source, id } = useParams<{ source: NewsSource; id: string }>();
  const { language, t } = useLanguage();
  const lang = getNewsLangKey(language);

  const [article, setArticle] = useState<IndustryNewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!source || !id) return;

    let cancelled = false;

    async function loadArticle() {
      setLoading(true);
      setError(null);

      try {
        const item = await fetchNewsArticleById(source, id, language);
        if (!cancelled) {
          setArticle(item);
          if (!item) setError(t('industryNews.notFound'));
        }
      } catch {
        if (!cancelled) setError(t('industryNews.error'));
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadArticle();
    return () => {
      cancelled = true;
    };
  }, [source, id, language, t]);

  const title = article ? getLocalizedText(article.mulit_language_title, lang) : '';
  const image = article ? getArticleImage(article, lang) : null;

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/industry-news"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} />
          {t('industryNews.backToList')}
        </Link>
      </div>

      {loading ? (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[480px] animate-pulse rounded-2xl bg-muted" />
        </div>
      ) : error || !article ? (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-12 text-center text-destructive">
            {error || t('industryNews.notFound')}
          </div>
        </div>
      ) : (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <time className="mb-4 block text-sm text-muted-foreground">
              {formatNewsDate(article.date, language)}
            </time>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">{title}</h1>
          </header>

          {image && (
            <div className="mb-10 overflow-hidden rounded-2xl border border-border">
              <img src={image} alt={title} className="w-full object-cover" />
            </div>
          )}

          {article.content ? (
            <div
              className="prose prose-neutral max-w-none leading-relaxed [&_img]:rounded-xl [&_p]:mb-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          ) : (
            <p className="text-foreground/70">{t('industryNews.noContent')}</p>
          )}
        </article>
      )}
    </div>
  );
}
