import { Mail, MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">DB Gaming</h3>
            <p className="text-white/70 text-sm mb-4">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.products')}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/product" className="hover:text-accent transition-colors">
                  {t('nav.gameProducts')}
                </Link>
              </li>
              <li>
                <a href="#games" className="hover:text-accent transition-colors">
                  Game Library
                </a>
              </li>
              <li>
                <a href="#games" className="hover:text-accent transition-colors">
                  Sports Betting
                </a>
              </li>
              <li>
                <a href="#games" className="hover:text-accent transition-colors">
                  Live Casino
                </a>
              </li>
              <li>
                <a href="#games" className="hover:text-accent transition-colors">
                  Slots & Games
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#cases" className="hover:text-accent transition-colors">
                  {t('nav.caseStudies')}
                </a>
              </li>
              <li>
                <Link to="/aboutus" className="hover:text-accent transition-colors">
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  {t('footer.blog')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  {t('footer.careers')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  {t('common.contactSales')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>business@dbgaming.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} />
                <span>@DBGaming_Official</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+63 917 123 4567</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent/20 hover:text-accent rounded-lg flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent/20 hover:text-accent rounded-lg flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent/20 hover:text-accent rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/15 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60 text-center md:text-left">
              <p>{t('footer.copyright')}</p>
              <p className="mt-1">
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
                {' · '}
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
                {' · '}
                <a href="#" className="hover:text-accent transition-colors">
                  Cookie Policy
                </a>
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors"
              aria-label="Back to top"
            >
              Back to Top
              <div className="w-8 h-8 bg-white/10 group-hover:bg-accent/20 group-hover:text-accent rounded-lg flex items-center justify-center transition-colors">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
