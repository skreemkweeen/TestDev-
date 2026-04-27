'use client'

const pubs = [
  'Architectural Digest',
  'Elle Decoration',
  'The World of Interiors',
  'Wallpaper*',
  'Vogue Living',
  'House & Garden',
  '1stDibs Introspective',
  'Dezeen',
]

export function PressMarquee() {
  const track = [...pubs, ...pubs]

  return (
    <section
      className="bg-obsidian border-y border-dim py-14 overflow-hidden"
      aria-label="Press recognition"
    >
      <p className="label text-center mb-10">As Seen In</p>

      <div className="relative">
        {/* Gradient fade edges */}
        <div
          className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #111114, transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #111114, transparent)' }}
          aria-hidden="true"
        />

        <div
          className="flex gap-16 w-max animate-marquee hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {track.map((pub, i) => (
            <span
              key={i}
              className="font-serif font-light italic text-smoke whitespace-nowrap hover:text-parchment transition-colors duration-300 cursor-default"
              style={{ fontSize: 'var(--text-xl)' }}
            >
              {pub}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
