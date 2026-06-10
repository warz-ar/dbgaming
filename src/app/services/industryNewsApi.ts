import type {
  IndustryNewsArticle,
  IndustryNewsListResponse,
  MultiLangField,
  NewsLangKey,
  NewsSource,
} from '../types/industryNews';

const API_BASE = '/api/obgm';
const FILE_BASE = 'https://api.obgm.com/file/';

const LANG_MAP: Record<'en' | 'zh', NewsLangKey> = {
  en: 'en-us',
  zh: 'zh-cn',
};

export function getNewsLangKey(language: 'en' | 'zh'): NewsLangKey {
  return LANG_MAP[language];
}

function parseMultiLang(value: MultiLangField | string | undefined): MultiLangField {
  if (!value) return {};
  if (typeof value === 'string') {
    try {
      return JSON.parse(value) as MultiLangField;
    } catch {
      return {};
    }
  }
  return value;
}

export function getLocalizedText(
  field: MultiLangField | string | undefined,
  lang: NewsLangKey,
  fallbackLang: NewsLangKey = 'en-us',
): string {
  const map = parseMultiLang(field);
  return map[lang] || map[fallbackLang] || map['zh-cn'] || Object.values(map).find(Boolean) || '';
}

export function getArticleImage(
  article: IndustryNewsArticle,
  lang: NewsLangKey,
): string | null {
  const banner = parseMultiLang(article.mulit_language_banner);
  const path =
    banner[lang] ||
    banner['en-us'] ||
    banner['zh-cn'] ||
    banner.undefined ||
    Object.values(banner).find(Boolean);

  return path ? `${FILE_BASE}${path}` : null;
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getArticleExcerpt(article: IndustryNewsArticle, lang: NewsLangKey, maxLength = 180): string {
  if (!article.content) return '';
  const text = stripHtml(article.content);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}…`;
}

export function formatNewsDate(dateStr: string, language: 'en' | 'zh'): string {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;

  return date.toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: language === 'zh' ? 'long' : 'long',
    day: 'numeric',
  });
}

export function getArticleYear(dateStr: string): number | null {
  const year = new Date(dateStr).getFullYear();
  return Number.isNaN(year) ? null : year;
}

async function fetchNewsList(
  source: NewsSource,
  params: Record<string, string | number>,
): Promise<IndustryNewsListResponse> {
  const query = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)]),
  );

  const response = await fetch(`${API_BASE}/api/client/${source}?${query}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${source} news`);
  }

  return response.json();
}

export async function fetchLatestNews(
  language: 'en' | 'zh',
  page = 1,
  pageSize = 10,
): Promise<{ items: IndustryNewsArticle[]; total: number }> {
  const lang = getNewsLangKey(language);
  const result = await fetchNewsList('activities', {
    current: page,
    size: pageSize,
    lang,
  });

  return {
    items: result.data?.data ?? [],
    total: result.data?.total ?? 0,
  };
}

export async function fetchIndustryInfoNews(
  language: 'en' | 'zh',
): Promise<IndustryNewsArticle[]> {
  const lang = getNewsLangKey(language);
  const result = await fetchNewsList('artical', {
    current: 1,
    size: 20,
    lang,
  });

  return result.data?.data ?? [];
}

export async function fetchNewsArticleById(
  source: NewsSource,
  id: string,
  language: 'en' | 'zh',
): Promise<IndustryNewsArticle | null> {
  const lang = getNewsLangKey(language);
  const result = await fetchNewsList(source, {
    current: 1,
    size: 1,
    lang,
    _id: id,
  });

  return result.data?.data?.[0] ?? null;
}

export function filterArticlesByYear(
  articles: IndustryNewsArticle[],
  year: number | 'all',
): IndustryNewsArticle[] {
  if (year === 'all') return articles;
  return articles.filter((article) => getArticleYear(article.date) === year);
}

export function collectYears(articles: IndustryNewsArticle[]): number[] {
  const years = new Set<number>();
  for (const article of articles) {
    const year = getArticleYear(article.date);
    if (year) years.add(year);
  }
  return Array.from(years).sort((a, b) => b - a);
}
