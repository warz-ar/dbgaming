import {
  Trophy,
  Tv,
  Gamepad2,
  Spade,
  Ticket,
  Sparkles,
  Hash,
  Gift,
  type LucideIcon,
} from 'lucide-react';

export interface GameProduct {
  id: string;
  titleKey: string;
  descKey: string;
  venues: { zh: string[]; en: string[] };
  demoHref: string;
  icon: LucideIcon;
  /** Tailwind gradient for card header — orange/black brand palette */
  gradient: string;
}

export const gameProducts: GameProduct[] = [
  {
    id: 'pandaSports',
    titleKey: 'product.games.pandaSports',
    descKey: 'product.games.pandaSports.desc',
    venues: { zh: ['FB体育', 'SABA沙巴', 'IM'], en: ['FB Sports', 'SABA', 'IM'] },
    demoHref: '/product-demo',
    icon: Trophy,
    gradient: 'from-orange-600 via-orange-500 to-amber-500',
  },
  {
    id: 'dbLive',
    titleKey: 'product.games.dbLive',
    descKey: 'product.games.dbLive.desc',
    venues: {
      zh: ['Evolution', 'DG', 'AG(PA)', 'Pragmatic Play', 'RSG', '完美', 'PT'],
      en: ['Evolution', 'DG', 'AG (PA)', 'Pragmatic Play', 'RSG', 'WM', 'PT'],
    },
    demoHref: '/product-demo',
    icon: Tv,
    gradient: 'from-neutral-900 via-neutral-800 to-orange-600',
  },
  {
    id: 'dbEsports',
    titleKey: 'product.games.dbEsports',
    descKey: 'product.games.dbEsports.desc',
    venues: { zh: ['雷火', 'IM'], en: ['TF Gaming', 'IM'] },
    demoHref: '/product-demo',
    icon: Gamepad2,
    gradient: 'from-neutral-950 via-orange-700 to-orange-500',
  },
  {
    id: 'dbChess',
    titleKey: 'product.games.dbChess',
    descKey: 'product.games.dbChess.desc',
    venues: {
      zh: ['高登棋牌', 'YOO棋牌', '开元棋牌', '乐游棋牌'],
      en: ['Golden Chess', 'YOO Chess', 'KY Chess', 'LEG Chess'],
    },
    demoHref: '/product-demo',
    icon: Spade,
    gradient: 'from-amber-700 via-orange-600 to-neutral-900',
  },
  {
    id: 'dbLottery',
    titleKey: 'product.games.dbLottery',
    descKey: 'product.games.dbLottery.desc',
    venues: { zh: ['VR彩票', 'TCG'], en: ['VR Lottery', 'TCG'] },
    demoHref: '/product-demo',
    icon: Ticket,
    gradient: 'from-orange-500 via-rose-600 to-neutral-900',
  },
  {
    id: 'dbSlots',
    titleKey: 'product.games.dbSlots',
    descKey: 'product.games.dbSlots.desc',
    venues: {
      zh: ['PG', 'JDB', '发财电子', 'Pragmatic Play', 'NetEnt', 'Red Tiger', 'RSG'],
      en: ['PG', 'JDB', 'FC Slots', 'Pragmatic Play', 'NetEnt', 'Red Tiger', 'RSG'],
    },
    demoHref: '/product-demo',
    icon: Sparkles,
    gradient: 'from-neutral-900 via-amber-600 to-orange-500',
  },
  {
    id: 'dbHash',
    titleKey: 'product.games.dbHash',
    descKey: 'product.games.dbHash.desc',
    venues: { zh: ['DB哈希'], en: ['DB Hash'] },
    demoHref: '/product-demo',
    icon: Hash,
    gradient: 'from-neutral-950 to-orange-600',
  },
  {
    id: 'dbScratch',
    titleKey: 'product.games.dbScratch',
    descKey: 'product.games.dbScratch.desc',
    venues: { zh: ['DB刮刮乐'], en: ['DB Scratch Cards'] },
    demoHref: '/product-demo',
    icon: Gift,
    gradient: 'from-orange-600 to-neutral-900',
  },
];
