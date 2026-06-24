export interface NavSubItem {
  key: string;
  href: string;
  external?: boolean;
}

export interface NavProductCard {
  key: string;
  introHref: string;
  demoHref: string;
  external?: boolean;
}

export interface NavGroupLink {
  key: string;
  href: string;
  external?: boolean;
}

export interface NavGroupCard {
  key: string;
  href?: string;
  external?: boolean;
  links?: NavGroupLink[];
}

export interface NavItem {
  key: string;
  href?: string;
  children?: NavSubItem[];
  productCards?: NavProductCard[];
  groupCards?: NavGroupCard[];
  featuredKey?: string;
  /** Override featured panel title (e.g. show a sub-item instead of parent name) */
  featuredTitleKey?: string;
  featuredHref?: string;
  /** Place featured panel on the right side of the mega menu */
  featuredOnRight?: boolean;
  /** Number of columns for sub-item grid (default: 3) */
  gridColumns?: 2 | 3 | 4;
  /** Mega menu layout variant */
  menuLayout?: 'default' | 'product-cards' | 'grouped-cards';
}

export const navigationItems: NavItem[] = [
  { key: 'nav.home', href: '/' },
  {
    key: 'nav.gameProducts',
    menuLayout: 'product-cards',
    gridColumns: 4,
    productCards: [
      { key: 'nav.game.pandaSports', introHref: '/product-demo', demoHref: '/product-demo' },
      { key: 'nav.game.dbLive', introHref: '/product-demo', demoHref: '/product-demo' },
      { key: 'nav.game.dbEsports', introHref: '/product-demo', demoHref: '/product-demo' },
      { key: 'nav.game.dbChess', introHref: '/product-demo', demoHref: '/product-demo' },
      { key: 'nav.game.dbLottery', introHref: '/product-demo', demoHref: '/product-demo' },
      { key: 'nav.game.dbSlots', introHref: '/product-demo', demoHref: '/product-demo' },
      { key: 'nav.game.dbHash', introHref: '/product-demo', demoHref: '/product-demo' },
      { key: 'nav.game.dbScratch', introHref: '/product-demo', demoHref: '/product-demo' },
    ],
  },
  {
    key: 'nav.agentProducts',
    menuLayout: 'grouped-cards',
    gridColumns: 4,
    groupCards: [
      { key: 'nav.agent.dbWl', href: 'https://www.dbgaming.com/DB-WL', external: true },
      {
        key: 'nav.agent.kmWl',
        links: [
          { key: 'nav.agent.kmSports', href: 'https://www.dbgaming.com/KM-Sports-WL', external: true },
          { key: 'nav.agent.kmCpLive', href: 'https://www.dbgaming.com/KM-CP-WL-WL', external: true },
        ],
      },
      { key: 'nav.agent.boya', href: '/product-demo' },
      { key: 'nav.agent.dbGameApi', href: '/solutions' },
      { key: 'nav.agent.smartApi', href: '/partnership' },
      { key: 'nav.agent.dbIntlWl', href: 'https://www.dbgaming.com/DB-WL', external: true },
      { key: 'nav.agent.chinaWl', href: '/solutions' },
      { key: 'nav.agent.liveTableRental', href: '/partnership' },
      { key: 'nav.agent.externalApi', href: '/solutions' },
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
  { key: 'nav.latestNews', href: '/industry-news' },
  {
    key: 'nav.aboutIgaming',
    featuredTitleKey: 'nav.about.aboutUs',
    featuredKey: 'nav.about.aboutUs.desc',
    featuredHref: '/aboutus',
    children: [
      { key: 'nav.about.aboutUs', href: '/aboutus' },
      { key: 'nav.about.industryNews', href: '/industry-news' },
      { key: 'nav.about.contactUs', href: '/contact' },
    ],
  },
  { key: 'nav.careers', href: '/contact' },
];
