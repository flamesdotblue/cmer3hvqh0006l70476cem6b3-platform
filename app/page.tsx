import Image from 'next/image';
import { ASSET_URL } from '@/lib/constants';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-6xl neo-surface soft-border p-6 md:p-10">
        <header className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink drop-shadow-[0_1px_0_rgba(255,255,255,0.7)]">
              Tactile Skeuomorphism
            </h1>
            <p className="mt-3 md:mt-4 text-ink-muted text-sm md:text-base leading-relaxed">
              A soft, realistic interface with a yellow and black theme inspired by the asset. Gentle highlights and
              deep shadows bring a tactile feel.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={ASSET_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-neo rounded-xl px-4 py-2 text-ink text-sm font-medium soft-border"
              >
                View Asset
              </a>
              <button className="btn-neo rounded-xl px-4 py-2 text-ink-muted text-sm font-medium soft-border flex items-center gap-2">
                <span className="h-2 w-2 rounded-full accent-dot" />
                Demo Action
              </button>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="neo-inset soft-border rounded-3xl p-3 md:p-4">
              <div className="relative overflow-hidden rounded-2xl soft-border">
                <Image
                  src={ASSET_URL}
                  alt="Skeuomorphic reference"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Panel title="Soft Switch">
            <div className="flex items-center justify-center">
              <button className="relative w-24 h-12 rounded-full neo-inset soft-border switch-track">
                <span className="switch-knob absolute top-1 left-1 h-10 w-10 rounded-full btn-neo soft-border" />
              </button>
            </div>
          </Panel>
          <Panel title="Dials">
            <div className="flex items-center justify-center gap-6">
              <Knob />
              <Knob size="sm" />
            </div>
          </Panel>
          <Panel title="Indicators">
            <div className="flex items-center justify-center gap-3">
              <span className="badge-neo soft-border px-3 py-1 rounded-full text-xs text-ink-muted">Idle</span>
              <span className="badge-accent soft-border px-3 py-1 rounded-full text-xs">Active</span>
              <span className="badge-neo soft-border px-3 py-1 rounded-full text-xs text-ink-muted">Ready</span>
            </div>
          </Panel>
        </section>
      </div>
    </main>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="neo-inset soft-border rounded-2xl p-4 glass">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-ink-muted font-medium text-sm drop-shadow-[0_1px_0_rgba(255,255,255,0.9)]">{title}</h3>
        <span className="h-2 w-2 rounded-full accent-dot" />
      </div>
      <div className="rounded-xl neo-surface p-4 soft-border">
        {children}
      </div>
    </div>
  );
}

function Knob({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const dims = size === 'sm' ? 'h-12 w-12' : 'h-16 w-16';
  return (
    <div className={`relative ${dims} rounded-full btn-neo soft-border`}>
      <div className="absolute inset-2 rounded-full neo-inset" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 w-1 rounded accent-dot" />
    </div>
  );
}
