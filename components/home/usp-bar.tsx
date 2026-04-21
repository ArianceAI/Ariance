'use client';

const tools = [
  { name: 'n8n',       emoji: '⚡' },
  { name: 'OpenAI',    emoji: '🤖' },
  { name: 'Make',      emoji: '🔧' },
  { name: 'Microsoft', emoji: '🪟' },
  { name: 'Notion',    emoji: '📋' },
  { name: 'Bubble',    emoji: '💬' },
  { name: 'Ollama',    emoji: '🦙' },
  { name: 'Mistral',   emoji: '🌊' },
  { name: 'Zapier',    emoji: '⚡' },
  { name: 'Supabase',  emoji: '🗄️' },
];

// Duplicate for seamless loop
const doubled = [...tools, ...tools];

export default function UspBar() {
  return (
    <section
      className="relative overflow-hidden py-10"
      style={{ background: 'var(--bg-1)' }}
    >
      {/* Top / bottom edge lines */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.30), transparent)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(16,217,160,0.20), transparent)' }}
      />

      {/* Fade masks on left/right */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, var(--bg-1), transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, var(--bg-1), transparent)' }} />

      <div className="mb-4 text-center">
        <span className="mono-label" style={{ color: 'var(--muted-d)' }}>
          Wij werken slim met de beste tools
        </span>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {doubled.map((tool, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full flex-shrink-0 transition-colors duration-200"
              style={{
                background: 'rgba(34,211,238,0.05)',
                border: '1px solid rgba(34,211,238,0.12)',
              }}
            >
              <span className="text-base">{tool.emoji}</span>
              <span
                className="font-display font-semibold text-[13px]"
                style={{ color: 'var(--muted-d)' }}
              >
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
