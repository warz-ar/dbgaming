import { Home, Search } from 'lucide-react';
import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="text-9xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-foreground/70 mb-8">
          Sorry, we couldn't find the page you're looking for. The page might have been moved or deleted.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors shadow-md"
          >
            <Home size={20} />
            Go Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-background border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition-colors"
          >
            <Search size={20} />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
