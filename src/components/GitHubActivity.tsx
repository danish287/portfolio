import { useGitHubActivity } from '../hooks/useGitHubActivity';
import { GitBranch, Star, Loader2 } from 'lucide-react';

// Update this with your actual GitHub username
const GITHUB_USERNAME = 'dania-reza';

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function getEventDescription(event: { type: string; payload: { action?: string; ref?: string; ref_type?: string; commits?: { message: string }[] } }) {
  switch (event.type) {
    case 'PushEvent':
      return `Pushed ${event.payload.commits?.length || 0} commit(s)`;
    case 'CreateEvent':
      return `Created ${event.payload.ref_type} ${event.payload.ref || ''}`;
    case 'PullRequestEvent':
      return `${event.payload.action} a pull request`;
    case 'IssuesEvent':
      return `${event.payload.action} an issue`;
    case 'WatchEvent':
      return 'Starred a repository';
    case 'ForkEvent':
      return 'Forked a repository';
    default:
      return event.type.replace('Event', '');
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  return date.toLocaleDateString();
}

export function GitHubActivity() {
  const { events, repos, loading } = useGitHubActivity(GITHUB_USERNAME);

  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-accent-400 to-teal-400" />
          <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">
            GitHub
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Open Source & Activity
        </h2>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin text-accent-400" size={32} />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <GithubIcon size={20} />
                <h3 className="text-lg font-semibold text-white">
                  Recent Activity
                </h3>
              </div>

              {events.length > 0 ? (
                <div className="space-y-4">
                  {events.slice(0, 6).map((event) => (
                    <div
                      key={event.id}
                      className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0"
                    >
                      <GitBranch size={14} className="text-teal-400 mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-300 truncate">
                          {getEventDescription(event)}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {event.repo.name}
                        </p>
                      </div>
                      <span className="text-xs text-gray-600 whitespace-nowrap">
                        {formatDate(event.created_at)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  No recent public activity found. Connect your GitHub username to display activity.
                </p>
              )}
            </div>

            {/* Repositories */}
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <Star size={20} className="text-accent-400" />
                <h3 className="text-lg font-semibold text-white">
                  Repositories
                </h3>
              </div>

              {repos.length > 0 ? (
                <div className="space-y-4">
                  {repos.slice(0, 6).map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block pb-3 border-b border-white/5 last:border-0 hover:bg-white/5 -mx-2 px-2 py-1 rounded transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-300">
                          {repo.name}
                        </span>
                        {repo.language && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-accent-400/10 text-accent-400">
                            {repo.language}
                          </span>
                        )}
                      </div>
                      {repo.description && (
                        <p className="text-xs text-gray-500 mt-1 truncate">
                          {repo.description}
                        </p>
                      )}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  No public repositories found. Update your GitHub username in the config.
                </p>
              )}
            </div>
          </div>
        )}

        <div className="mt-6 text-center">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white glass-card rounded-lg transition-colors"
          >
            <GithubIcon size={16} />
            View full profile on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
