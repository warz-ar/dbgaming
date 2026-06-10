import { ArrowLeft, Code2, Book, Zap, Lock, Database, Cloud } from 'lucide-react';
import { Link } from 'react-router';

export function ApiDocsPage() {
  const apiFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Average response time under 50ms with global CDN coverage',
    },
    {
      icon: Lock,
      title: 'Secure by Default',
      description: 'OAuth 2.0 authentication with API key management',
    },
    {
      icon: Database,
      title: 'Real-time Updates',
      description: 'WebSocket support for live game data and events',
    },
    {
      icon: Cloud,
      title: 'High Availability',
      description: '99.9% uptime SLA with automatic failover',
    },
  ];

  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/games',
      description: 'Retrieve list of available games',
    },
    {
      method: 'GET',
      path: '/api/v1/games/{gameId}',
      description: 'Get detailed game information',
    },
    {
      method: 'POST',
      path: '/api/v1/sessions/create',
      description: 'Create a new game session',
    },
    {
      method: 'GET',
      path: '/api/v1/providers',
      description: 'List all game providers',
    },
    {
      method: 'GET',
      path: '/api/v1/categories',
      description: 'Get game categories and filters',
    },
    {
      method: 'POST',
      path: '/api/v1/webhooks',
      description: 'Register webhook endpoints',
    },
  ];

  const codeExample = `// Initialize DB Gaming API
import DBGaming from '@dbgaming/sdk';

const client = new DBGaming({
  apiKey: 'your_api_key_here',
  environment: 'production'
});

// Fetch available games
const games = await client.games.list({
  category: 'live-casino',
  provider: 'evolution',
  limit: 20
});

// Create game session
const session = await client.sessions.create({
  gameId: 'baccarat-live',
  playerId: 'player_123',
  currency: 'USD',
  returnUrl: 'https://yoursite.com/games'
});

console.log('Game URL:', session.gameUrl);`;

  return (
    <div className="pt-20 pb-12">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full mb-4 border border-secondary/20">
            <span className="text-sm font-medium">API Documentation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Developer-Friendly API
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            RESTful API with comprehensive documentation. Integrate gaming content in minutes, not months.
          </p>
        </div>
      </div>

      {/* API Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apiFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all hover:border-secondary/50"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-secondary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Code Example */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="text-secondary" size={28} />
            <h2 className="text-2xl font-bold">Quick Start Example</h2>
          </div>
          <div className="bg-[#1e1e1e] rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-[#d4d4d4] font-mono leading-relaxed">
              <code>{codeExample}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* API Endpoints */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Book className="text-secondary" size={28} />
          <h2 className="text-2xl font-bold">Core Endpoints</h2>
        </div>
        <div className="space-y-4">
          {endpoints.map((endpoint, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-secondary/50"
            >
              <div className="flex items-start gap-4">
                <span
                  className={`px-3 py-1 rounded text-xs font-bold ${
                    endpoint.method === 'GET'
                      ? 'bg-blue-500/10 text-blue-500'
                      : 'bg-green-500/10 text-green-500'
                  }`}
                >
                  {endpoint.method}
                </span>
                <div className="flex-1">
                  <code className="text-secondary font-mono text-sm">{endpoint.path}</code>
                  <p className="text-foreground/70 mt-2">{endpoint.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Building Today</h2>
          <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
            Get your API key and access full documentation with code examples in multiple languages.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors shadow-md"
            >
              Get API Key
            </Link>
            <a
              href="https://docs.dbgaming.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-background border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition-colors"
            >
              Full Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
