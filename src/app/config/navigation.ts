export interface NavSubItem {
  key: string;
  href: string;
  external?: boolean;
}

export interface NavItem {
  key: string;
  href?: string;
  children?: NavSubItem[];
  featuredKey?: string;
  /** Override featured panel title (e.g. show a sub-item instead of parent name) */
  featuredTitleKey?: string;
  featuredHref?: string;
  /** Place featured panel on the right side of the mega menu */
  featuredOnRight?: boolean;
  /** Number of columns for sub-item grid (default: 3) */
  gridColumns?: 2 | 3;
}

export const navigationItems: NavItem[] = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.gameProducts', href: '/product-demo' },
  {
    key: 'nav.agentProducts',
    featuredKey: 'nav.agentProducts.featured',
    children: [
      { key: 'nav.agent.kmSports', href: 'https://www.dbgaming.com/KM-Sports-WL', external: true },
      { key: 'nav.agent.kmCpLive', href: 'https://www.dbgaming.com/KM-CP-WL-WL', external: true },
      { key: 'nav.agent.dbWl', href: 'https://www.dbgaming.com/DB-WL', external: true },
      { key: 'nav.agent.boya', href: '/product-demo' },
      { key: 'nav.agent.externalApi', href: '/solutions' },
      { key: 'nav.agent.liveApiRental', href: '/partnership' },
    ],
  },
  {
    key: 'nav.cooperationMode',
    featuredKey: 'nav.cooperationMode.featured',
    children: [
      { key: 'nav.coop.onboarding', href: '/solutions' },
      { key: 'nav.coop.languages', href: 'https://www.dbgaming.com/HZ-Lang', external: true },
      { key: 'nav.coop.apiIntegration', href: '/partnership' },
    ],
  },
  {
    key: 'nav.aboutIgaming',
    featuredTitleKey: 'nav.about.events',
    featuredKey: 'nav.about.events.featured',
    featuredHref: '/contact',
    gridColumns: 2,
    children: [
      { key: 'nav.about.aboutUs', href: '/aboutus' },
      { key: 'nav.about.events', href: '/contact' },
      { key: 'nav.about.industryNews', href: '/industry-news' },
      { key: 'nav.about.contactUs', href: '/contact' },
      { key: 'nav.about.careers', href: '/contact' },
    ],
  },
];
