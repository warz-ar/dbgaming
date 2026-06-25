import { createBrowserRouter } from 'react-router';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { ProductDemoPage } from './pages/ProductDemoPage';
import { ProductPage } from './pages/ProductPage';
import { PartnershipPage } from './pages/PartnershipPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { ContactPage } from './pages/ContactPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { IndustryNewsPage } from './pages/IndustryNewsPage';
import { IndustryNewsDetailPage } from './pages/IndustryNewsDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter(
  [
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'product', Component: ProductPage },
      { path: 'product-demo', Component: ProductDemoPage },
      { path: 'partnership', Component: PartnershipPage },
      { path: 'solutions', Component: SolutionsPage },
      { path: 'case-studies', Component: CaseStudiesPage },
      { path: 'contact', Component: ContactPage },
      { path: 'aboutus', Component: AboutUsPage },
      { path: 'industry-news', Component: IndustryNewsPage },
      { path: 'industry-news/:source/:id', Component: IndustryNewsDetailPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, '') || undefined },
);
