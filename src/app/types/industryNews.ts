export type NewsLangKey = 'zh-cn' | 'en-us' | 'zh-tw' | 'vi-vn' | 'th-td' | 'ru' | 'es-es' | 'pt-br';

export type MultiLangField = Partial<Record<NewsLangKey | 'undefined', string>>;

export interface IndustryNewsArticle {
  _id: string;
  show_lan?: string;
  order?: number;
  enabled?: string;
  type?: string;
  home_top?: string;
  type_top?: string;
  mulit_language_title: MultiLangField | string;
  mulit_language_banner: MultiLangField | string;
  mulit_language_banner_h5?: MultiLangField | string;
  date: string;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface IndustryNewsListResponse {
  code: number;
  message?: string;
  data: {
    total: number;
    data: IndustryNewsArticle[];
    limit?: number;
  };
}

export type NewsSource = 'activities' | 'artical';
