import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { LanguageProvider } from '../contexts/LanguageContext';

export function RootLayout() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
