import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router';
import { ArrowUpRight, ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { navigationItems, type NavGroupCard, type NavItem, type NavProductCard } from '../config/navigation';

const LOGO_BY_LANG = {
  zh: {
    white: 'https://dbgaming.com/img/db_logo_white_1.png',
    default: 'https://dbgaming.com/img/db_logo_1.png',
  },
  en: {
    white: 'https://www.dbgaming.com/img/en/db_logo_white_1.png',
    default: 'https://www.dbgaming.com/img/en/db_logo_1.png',
  },
} as const;

function megaMenuPanelClass(glassDark: boolean) {
  return glassDark
    ? 'bg-black/40 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
    : 'bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-lg';
}

function NavLink({
  href,
  external,
  className,
  children,
  onClick,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

function GroupCard({
  card,
  t,
  onClose,
  glassDark,
}: {
  card: NavGroupCard;
  t: (key: string) => string;
  onClose: () => void;
  glassDark: boolean;
}) {
  const cardClass = glassDark
    ? 'rounded-xl bg-white/10 backdrop-blur-md border border-white/15 overflow-hidden hover:border-white/30 hover:bg-white/15 transition-all'
    : 'rounded-xl bg-card/90 backdrop-blur-sm border border-border overflow-hidden hover:border-secondary/50 hover:shadow-md transition-all';
  const titleClass = glassDark ? 'text-white' : '';
  const descClass = glassDark ? 'text-white/65' : 'text-foreground/60';
  const iconClass = glassDark ? 'text-white/40' : 'text-foreground/30';
  const linkClass = glassDark
    ? 'block px-5 py-3.5 text-sm font-semibold text-white border-t border-white/15 hover:bg-white/10 transition-colors'
    : 'block px-5 py-3.5 text-sm font-semibold border-t border-border hover:bg-muted/60 transition-colors';

  const header = (
    <div className="p-5 pb-4">
      <div className="flex items-start justify-between gap-3 mb-2">
        <p className={`font-semibold text-sm uppercase tracking-wide ${titleClass}`}>{t(card.key)}</p>
        <ArrowUpRight size={16} className={`shrink-0 mt-0.5 ${iconClass}`} />
      </div>
      <p className={`text-xs leading-relaxed ${descClass}`}>{t(`${card.key}.desc`)}</p>
    </div>
  );

  if (card.links?.length) {
    return (
      <div className={cardClass}>
        {header}
        {card.links.map((link) => (
          <NavLink
            key={link.key}
            href={link.href}
            external={link.external}
            onClick={onClose}
            className={linkClass}
          >
            {t(link.key)}
          </NavLink>
        ))}
      </div>
    );
  }

  return (
    <NavLink
      href={card.href || '#'}
      external={card.external}
      onClick={onClose}
      className={`block ${cardClass}`}
    >
      {header}
    </NavLink>
  );
}

function GroupCardsMenuPanel({
  item,
  t,
  onClose,
  glassDark,
}: {
  item: NavItem;
  t: (key: string) => string;
  onClose: () => void;
  glassDark: boolean;
}) {
  if (!item.groupCards?.length) return null;

  const gridColsClass =
    item.gridColumns === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : item.gridColumns === 2
        ? 'grid-cols-2'
        : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={megaMenuPanelClass(glassDark)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`grid ${gridColsClass} gap-4`}>
          {item.groupCards.map((card) => (
            <GroupCard key={card.key} card={card} t={t} onClose={onClose} glassDark={glassDark} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  card,
  t,
  onClose,
  glassDark,
}: {
  card: NavProductCard;
  t: (key: string) => string;
  onClose: () => void;
  glassDark: boolean;
}) {
  const cardClass = glassDark
    ? 'flex h-full flex-col rounded-xl bg-white/10 backdrop-blur-md border border-white/15 overflow-hidden hover:border-white/30 hover:bg-white/15 transition-all'
    : 'flex h-full flex-col rounded-xl bg-card/90 backdrop-blur-sm border border-border overflow-hidden hover:border-secondary/50 hover:shadow-md transition-all';
  const titleClass = glassDark ? 'text-white' : '';
  const descClass = glassDark ? 'text-white/65' : 'text-foreground/60';
  const iconClass = glassDark ? 'text-white/40' : 'text-foreground/30';
  const demoClass = glassDark
    ? 'flex h-11 w-full items-center justify-center border-t border-white/15 text-xs font-medium text-secondary transition-colors hover:bg-white/10 hover:text-secondary/80'
    : 'flex h-11 w-full items-center justify-center border-t border-border text-xs font-medium text-secondary transition-colors hover:bg-muted/60 hover:text-secondary/80';

  return (
    <div className={cardClass}>
      <div className="flex-1 p-5 pb-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <p className={`font-semibold text-sm uppercase tracking-wide ${titleClass}`}>{t(card.key)}</p>
          <ArrowUpRight size={16} className={`shrink-0 mt-0.5 ${iconClass}`} />
        </div>
        <p className={`text-xs leading-relaxed ${descClass}`}>{t(`${card.key}.desc`)}</p>
      </div>
      <NavLink
        href={card.demoHref}
        external={card.external}
        onClick={onClose}
        className={demoClass}
      >
        {t('nav.game.productDemo')}
      </NavLink>
    </div>
  );
}

function ProductCardsMenuPanel({
  item,
  t,
  onClose,
  glassDark,
}: {
  item: NavItem;
  t: (key: string) => string;
  onClose: () => void;
  glassDark: boolean;
}) {
  if (!item.productCards?.length) return null;

  const gridColsClass =
    item.gridColumns === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : item.gridColumns === 2
        ? 'grid-cols-2'
        : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={megaMenuPanelClass(glassDark)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`grid ${gridColsClass} gap-4`}>
          {item.productCards.map((card) => (
            <ProductCard key={card.key} card={card} t={t} onClose={onClose} glassDark={glassDark} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MegaMenuPanel({
  item,
  t,
  onClose,
  glassDark,
}: {
  item: NavItem;
  t: (key: string) => string;
  onClose: () => void;
  glassDark: boolean;
}) {
  if (!item.children?.length) return null;

  const featuredTitleKey = item.featuredTitleKey || item.key;
  const gridChildren = item.featuredTitleKey
    ? item.children.filter((child) => child.key !== item.featuredTitleKey)
    : item.children;

  const featuredPanel = (
    <NavLink
      href={item.featuredHref || '#'}
      onClick={onClose}
      className={
        glassDark
          ? 'hidden lg:flex w-72 shrink-0 flex-col justify-between rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:border-white/35 hover:bg-white/15 transition-all'
          : 'hidden lg:flex w-72 shrink-0 flex-col justify-between rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 p-6 hover:border-secondary/40 hover:shadow-md transition-all'
      }
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
          {t(featuredTitleKey)}
        </p>
        <p className={`text-sm leading-relaxed ${glassDark ? 'text-white/75' : 'text-foreground/70'}`}>
          {t(item.featuredKey || `${item.key}.featured`)}
        </p>
      </div>
      <ArrowUpRight className="text-secondary mt-6" size={20} />
    </NavLink>
  );

  const gridColsClass =
    item.gridColumns === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : item.gridColumns === 2
        ? 'grid-cols-2'
        : 'sm:grid-cols-2 lg:grid-cols-3';

  const gridItemClass = glassDark
    ? 'group flex items-start justify-between gap-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-5 hover:border-white/30 hover:bg-white/15 transition-all'
    : 'group flex items-start justify-between gap-3 rounded-xl bg-card/90 backdrop-blur-sm border border-border p-5 hover:border-secondary/50 hover:shadow-md transition-all';

  const gridPanel = (
    <div className={`flex-1 grid ${gridColsClass} gap-4`}>
      {gridChildren.map((child) => (
              <NavLink
                key={child.key}
                href={child.href}
                external={child.external}
                onClick={onClose}
                className={gridItemClass}
              >
                <div className="min-w-0">
                  <p className={`font-semibold text-sm uppercase tracking-wide group-hover:text-secondary transition-colors ${glassDark ? 'text-white' : ''}`}>
                    {t(child.key)}
                  </p>
                  <p className={`text-xs mt-1.5 leading-relaxed ${glassDark ? 'text-white/65' : 'text-foreground/60'}`}>
                    {t(`${child.key}.desc`)}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className={`shrink-0 group-hover:text-secondary transition-colors mt-0.5 ${glassDark ? 'text-white/40' : 'text-foreground/30'}`}
                />
              </NavLink>
      ))}
    </div>
  );

  return (
    <div className={megaMenuPanelClass(glassDark)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {item.featuredOnRight ? (
            <>
              {gridPanel}
              {featuredPanel}
            </>
          ) : (
            <>
              {featuredPanel}
              {gridPanel}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled && !mobileMenuOpen;
  const useWhiteLogo = isTransparent;
  const logoUrls = LOGO_BY_LANG[language];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
    setExpandedMobile(null);
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const openMenu = (key: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveMenu(key);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const activeItem = navigationItems.find((item) => item.key === activeMenu);

  const navLinkClass = isTransparent
    ? 'text-white/85 hover:text-white hover:bg-white/10'
    : 'text-foreground/80 hover:text-foreground hover:bg-muted/60';

  const navActiveClass = isTransparent
    ? 'bg-white/15 text-white'
    : 'bg-muted text-foreground';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent border-b border-white/10'
          : 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm'
      }`}
      onMouseLeave={scheduleClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <img
              src={useWhiteLogo ? logoUrls.white : logoUrls.default}
              alt="DB Gaming"
              className="h-9 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) =>
              item.children || item.productCards || item.groupCards ? (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => openMenu(item.key)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeMenu === item.key ? navActiveClass : navLinkClass
                    }`}
                  >
                    {t(item.key)}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${activeMenu === item.key ? 'rotate-180 text-accent' : ''}`}
                    />
                  </button>
                </div>
              ) : (
                <NavLink
                  key={item.key}
                  href={item.href!}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${navLinkClass}`}
                >
                  {t(item.key)}
                </NavLink>
              ),
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-1.5 transition-colors border rounded-lg ${
                isTransparent
                  ? 'text-white/85 hover:text-white border-white/25 hover:border-white/40'
                  : 'text-foreground/80 hover:text-foreground border-border hover:border-secondary/50'
              }`}
              aria-label="Switch language"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{language === 'en' ? '中文' : 'EN'}</span>
            </button>
            <Link
              to="/contact"
              className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors shadow-sm hover:shadow-md text-sm font-medium"
            >
              {t('nav.requestDemo')}
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 transition-colors ${isTransparent ? 'text-white' : 'text-foreground'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain">
            <div className="flex flex-col gap-0.5">
              {navigationItems.map((item) =>
                item.children || item.productCards || item.groupCards ? (
                  <div key={item.key}>
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedMobile(expandedMobile === item.key ? null : item.key)
                      }
                      className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors ${
                        expandedMobile === item.key
                          ? 'text-foreground bg-muted/50'
                          : 'text-foreground/80 hover:text-foreground hover:bg-muted/40'
                      }`}
                    >
                      <span className="font-medium">{t(item.key)}</span>
                      <ChevronDown
                        size={16}
                        className={`shrink-0 transition-transform ${
                          expandedMobile === item.key ? 'rotate-180 text-accent' : 'text-muted-foreground'
                        }`}
                      />
                    </button>
                    {expandedMobile === item.key && item.groupCards && (
                      <div className="mx-3 mb-2 rounded-lg border border-border/60 bg-muted/25 overflow-hidden divide-y divide-border/50">
                        {item.groupCards.map((card) =>
                          card.links?.length ? (
                            <div key={card.key}>
                              <p className="px-3 pt-2.5 pb-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                                {t(card.key)}
                              </p>
                              {card.links.map((link) => (
                                <NavLink
                                  key={link.key}
                                  href={link.href}
                                  external={link.external}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center justify-between gap-3 px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors"
                                >
                                  <span>{t(link.key)}</span>
                                  <ArrowUpRight size={14} className="shrink-0 text-muted-foreground" />
                                </NavLink>
                              ))}
                            </div>
                          ) : (
                            <NavLink
                              key={card.key}
                              href={card.href || '#'}
                              external={card.external}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between gap-3 px-3 py-2.5 text-sm text-foreground/90 hover:text-foreground hover:bg-muted/50 transition-colors"
                            >
                              <span className="font-medium">{t(card.key)}</span>
                              <ArrowUpRight size={14} className="shrink-0 text-muted-foreground" />
                            </NavLink>
                          ),
                        )}
                      </div>
                    )}
                    {expandedMobile === item.key && item.productCards && (
                      <div className="mx-3 mb-2 rounded-lg border border-border/60 bg-muted/25 overflow-hidden divide-y divide-border/50">
                        {item.productCards.map((card) => (
                          <div
                            key={card.key}
                            className="flex items-center justify-between gap-3 px-3 py-2.5"
                          >
                            <span className="text-sm font-medium text-foreground/90 min-w-0 truncate">
                              {t(card.key)}
                            </span>
                            <NavLink
                              href={card.demoHref}
                              external={card.external}
                              onClick={() => setMobileMenuOpen(false)}
                              className="shrink-0 text-xs font-semibold text-accent hover:text-accent/80 px-2.5 py-1 rounded-md hover:bg-accent/10 transition-colors"
                            >
                              {t('nav.game.productDemo')}
                            </NavLink>
                          </div>
                        ))}
                      </div>
                    )}
                    {expandedMobile === item.key && item.children && (
                      <div className="mx-3 mb-2 rounded-lg border border-border/60 bg-muted/25 overflow-hidden divide-y divide-border/50">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.key}
                            href={child.href}
                            external={child.external}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between gap-3 px-3 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors"
                          >
                            <span>{t(child.key)}</span>
                            <ArrowUpRight size={14} className="shrink-0 text-muted-foreground" />
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.key}
                    href={item.href!}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/40 rounded-lg transition-colors font-medium"
                  >
                    {t(item.key)}
                  </NavLink>
                ),
              )}
              <div className="mt-3 pt-3 border-t border-border/60 mx-3 flex flex-col gap-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-foreground/80 hover:text-foreground transition-colors border border-border rounded-lg hover:border-accent/40"
                >
                  <Globe size={16} />
                  <span className="text-sm font-medium">{language === 'en' ? '中文' : 'EN'}</span>
                </button>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-2.5 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-center font-medium"
                >
                  {t('nav.requestDemo')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Mega Menu — full-width panel below header */}
      {activeItem && (activeItem.children || activeItem.productCards || activeItem.groupCards) && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full"
          onMouseEnter={() => openMenu(activeItem.key)}
        >
          {activeItem.menuLayout === 'product-cards' ? (
            <ProductCardsMenuPanel
              item={activeItem}
              t={t}
              onClose={() => setActiveMenu(null)}
              glassDark={isTransparent}
            />
          ) : activeItem.menuLayout === 'grouped-cards' ? (
            <GroupCardsMenuPanel
              item={activeItem}
              t={t}
              onClose={() => setActiveMenu(null)}
              glassDark={isTransparent}
            />
          ) : (
            <MegaMenuPanel
              item={activeItem}
              t={t}
              onClose={() => setActiveMenu(null)}
              glassDark={isTransparent}
            />
          )}
        </div>
      )}
    </nav>
  );
}
