import { Code2, Zap, Lock, RefreshCw, FileJson, Globe2 } from 'lucide-react';

export function ApiSection() {
  const apiFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Average response time < 50ms with 99.9% uptime SLA',
    },
    {
      icon: Lock,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade encryption and full regulatory compliance',
    },
    {
      icon: RefreshCw,
      title: 'Real-time Updates',
      description: 'WebSocket support for live odds and game state updates',
    },
    {
      icon: FileJson,
      title: 'RESTful API',
      description: 'Clean, well-documented JSON API with SDKs for major languages',
    },
    {
      icon: Globe2,
      title: 'Global CDN',
      description: 'Low latency worldwide with 20+ edge locations',
    },
    {
      icon: Code2,
      title: 'Developer Friendly',
      description: 'Comprehensive docs, sandbox environment, and code samples',
    },
  ];

  return (
    <section id="api" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Features */}
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-6 border border-primary/20">
              <span className="text-sm font-medium">API Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Powerful API,<br />Simple Integration
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Our comprehensive API gives you access to thousands of games, payment solutions, and back-office tools through a single integration.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {apiFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{feature.title}</h4>
                      <p className="text-sm text-foreground/60">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-md">
                View Documentation
              </button>
              <button className="px-6 py-3 bg-background border-2 border-border text-foreground rounded-lg hover:bg-muted transition-colors">
                Get API Key
              </button>
            </div>
          </div>

          {/* Right - Code Example */}
          <div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm ml-4">API Request Example</span>
              </div>

              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{`// Initialize DB Gaming API
const dbGaming = new DBGaming({
  apiKey: 'your_api_key',
  environment: 'production'
});

// Get available games
const games = await dbGaming.games.list({
  category: 'live-casino',
  provider: 'evolution',
  limit: 20
});

// Create game session
const session = await dbGaming.sessions.create({
  gameId: games[0].id,
  playerId: 'player_123',
  currency: 'USD'
});

// Launch game
window.location.href = session.launchUrl;`}</code>
              </pre>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-secondary mb-1">&lt;50ms</div>
                <div className="text-xs text-foreground/60">Response Time</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-secondary mb-1">99.9%</div>
                <div className="text-xs text-foreground/60">Uptime SLA</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
                <div className="text-xs text-foreground/60">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
