'use client'

export default function EbookMockup() {
  return (
    <div className="ebook-scene w-full flex items-center justify-center py-6">
      <div className="ebook-book">
        <div className="ebook-pages" aria-hidden="true" />
        <div className="ebook-spine" aria-hidden="true" />
        <div className="ebook-cover">
          {/* Cover design */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-between text-center px-7 py-9"
            style={{
              background:
                'linear-gradient(155deg, hsl(158 60% 10%) 0%, hsl(158 58% 18%) 55%, hsl(158 45% 24%) 100%)',
            }}
          >
            {/* Gold border */}
            <div
              className="absolute inset-3 rounded-sm pointer-events-none"
              style={{ border: '1px solid hsl(38 62% 52% / 0.55)' }}
              aria-hidden="true"
            />

            {/* Top: brand emblem */}
            <div className="relative flex flex-col items-center gap-2 mt-1">
              <svg
                width="46"
                height="46"
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden="true"
                className="text-amber-200"
              >
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" opacity="0.55" />
                <path
                  d="M24 10c-5 6-9 8-9 14a9 9 0 0018 0c0-6-4-8-9-14z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
                <path d="M24 14v22" stroke="currentColor" strokeWidth="1" opacity="0.7" />
              </svg>
              <span className="text-[10px] tracking-[0.3em] uppercase text-amber-200/80">
                Guia digital
              </span>
            </div>

            {/* Middle: title */}
            <div className="relative flex flex-col items-center">
              <div className="w-8 h-px bg-amber-300/70 mb-5" />
              <h3
                className="font-serif text-amber-50 leading-[0.95] text-3xl sm:text-4xl"
                style={{ letterSpacing: '0.01em' }}
              >
                Jejum
                <br />
                <em className="not-italic text-amber-200">Bíblico</em>
                <br />
                <span className="text-xl sm:text-2xl font-light">na Prática</span>
              </h3>
              <div className="w-8 h-px bg-amber-300/70 mt-5" />
            </div>

            {/* Bottom: tagline */}
            <div className="relative text-[10px] sm:text-xs uppercase tracking-[0.28em] text-amber-100/70">
              Direção · Clareza · Propósito
            </div>

            {/* Subtle leaf ornament */}
            <svg
              className="absolute -bottom-4 -right-4 opacity-20"
              width="180"
              height="180"
              viewBox="0 0 120 120"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M60 20c-22 0-40 18-40 40s18 40 40 40 40-18 40-40S82 20 60 20zm0 10c16.5 0 30 13.5 30 30S76.5 90 60 90 30 76.5 30 60s13.5-30 30-30z"
                stroke="hsl(38 62% 52%)"
                strokeWidth="1"
              />
              <path
                d="M40 60c0-11 9-20 20-20s20 9 20 20"
                stroke="hsl(38 62% 52%)"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
