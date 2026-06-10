import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router';
import { ArrowUpRight, ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { navigationItems, type NavItem } from '../config/navigation';

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

function MegaMenuPanel({
  item,
  t,
  onClose,
}: {
  item: NavItem;
  t: (key: string) => string;
  onClose: () => void;
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
      className="hidden lg:flex w-72 shrink-0 flex-col justify-between rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 p-6 hover:border-secondary/40 hover:shadow-md transition-all"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
          {t(featuredTitleKey)}
        </p>
        <p className="text-sm text-foreground/70 leading-relaxed">
          {t(item.featuredKey || `${item.key}.featured`)}
        </p>
      </div>
      <ArrowUpRight className="text-secondary mt-6" size={20} />
    </NavLink>
  );

  const gridColsClass =
    item.gridColumns === 2 ? 'grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3';

  const gridPanel = (
    <div className={`flex-1 grid ${gridColsClass} gap-4`}>
      {gridChildren.map((child) => (
              <NavLink
                key={child.key}
                href={child.href}
                external={child.external}
                onClick={onClose}
                className="group flex items-start justify-between gap-3 rounded-xl bg-card border border-border p-5 hover:border-secondary/50 hover:shadow-md transition-all"
              >
                <div className="min-w-0">
                  <p className="font-semibold text-sm uppercase tracking-wide group-hover:text-secondary transition-colors">
                    {t(child.key)}
                  </p>
                  <p className="text-xs text-foreground/60 mt-1.5 leading-relaxed">
                    {t(`${child.key}.desc`)}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-foreground/30 group-hover:text-secondary transition-colors mt-0.5"
                />
              </NavLink>
      ))}
    </div>
  );

  return (
    <div className="bg-muted/95 backdrop-blur-md border-b border-border shadow-lg">
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
  const isTransparent = isHome && !scrolled && !mobileMenuOpen && !activeMenu;

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
            <h2
              className={`text-2xl font-bold transition-colors ${
                isTransparent
                  ? 'text-white'
                  : 'bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'
              }`}
            >
              DB Gaming
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) =>
              item.children ? (
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
          <div className="lg:hidden py-4 border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navigationItems.map((item) =>
                item.children ? (
                  <div key={item.key}>
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedMobile(expandedMobile === item.key ? null : item.key)
                      }
                      className="w-full flex items-center justify-between px-4 py-3 text-left text-foreground/80 hover:text-foreground hover:bg-muted/60 rounded-lg transition-colors"
                    >
                      <span className="font-medium">{t(item.key)}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${expandedMobile === item.key ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {expandedMobile === item.key && (
                      <div className="ml-4 mb-2 flex flex-col gap-1 border-l border-border pl-3">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.key}
                            href={child.href}
                            external={child.external}
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-muted/40 rounded transition-colors"
                          >
                            {t(child.key)}
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
                    className="px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-muted/60 rounded-lg transition-colors font-medium"
                  >
                    {t(item.key)}
                  </NavLink>
                ),
              )}
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-1.5 mx-4 mt-2 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors border border-border rounded-lg hover:border-secondary/50"
              >
                <Globe size={16} />
                <span className="text-sm font-medium">{language === 'en' ? '中文' : 'EN'}</span>
              </button>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-center font-medium"
              >
                {t('nav.requestDemo')}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Mega Menu — full-width panel below header */}
      {activeItem?.children && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full"
          onMouseEnter={() => openMenu(activeItem.key)}
        >
          <MegaMenuPanel
            item={activeItem}
            t={t}
            onClose={() => setActiveMenu(null)}
          />
        </div>
      )}
    </nav>
  );
}
