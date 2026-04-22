'use client'

import Image from 'next/image'
import Reveal from './reveal'
import CTAButton from './cta-button'
import EbookMockup from './ebook-mockup'
import {
  Compass,
  Sparkles,
  Flame,
  BookOpen,
  HeartHandshake,
  RefreshCcw,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Download,
  Smartphone,
  BookMarked,
  CircleAlert,
  CircleHelp,
} from 'lucide-react'

/* Image URLs (retrieved from Unsplash/Pexels) */
const IMG = {
  hero:
    'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VucmlzZSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
  identification:
    'https://images.pexels.com/photos/28916454/pexels-photo-28916454.jpeg?cs=srgb&dl=pexels-ast4rk-28916454.jpg&fm=jpg',
  doubts:
    'https://images.unsplash.com/photo-1592963083551-30d6bb8486ac?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVuc2l2ZXxlbnwwfHwwfHx8MA%3D%3D',
  bible:
    'https://images.unsplash.com/photo-1759149789753-9a6053f03725?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
  fasting:
    'https://images.unsplash.com/photo-1658104261277-c164ef314d12?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
  whoisthisfor:
    'https://images.unsplash.com/photo-1765077559187-e97edab3710b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  finalcta:
    'https://images.unsplash.com/photo-1757353071874-38ba5deb546e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8',
}

/* Small helpers */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-gold font-semibold">
      <span className="divider-dot" aria-hidden="true" />
      <span>{children}</span>
      <span className="divider-dot" aria-hidden="true" />
    </div>
  )
}

function OrnamentDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6 text-brand-gold/70">
      <span className="h-px w-12 bg-brand-gold/50" />
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C8 7 4 9 4 13a8 8 0 0016 0c0-4-4-6-8-11z" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="h-px w-12 bg-brand-gold/50" />
    </div>
  )
}

export default function LandingPage() {
  const benefits = [
    {
      icon: Compass,
      title: 'Direção em momentos de dúvida',
      description:
        'Sair do automatismo e encontrar clareza nos momentos em que você não sabe o que fazer.',
    },
    {
      icon: Flame,
      title: 'Força para romper hábitos difíceis',
      description:
        'Parar o desgaste interno e conquistar a determinação necessária para mudanças reais.',
    },
    {
      icon: Sparkles,
      title: 'Mais clareza espiritual',
      description:
        'Enxergar com mais nitidez o caminho diante de você, com menos barulho e mais presença.',
    },
    {
      icon: HeartHandshake,
      title: 'Alinhamento interior',
      description:
        'Reconectar o que você ora com o que você vive. Menos ansiedade, mais intenção.',
    },
    {
      icon: CircleHelp,
      title: 'Respostas fora do automático',
      description:
        'Responder questões reais que a correria do dia a dia nunca deixou você escutar.',
    },
    {
      icon: RefreshCcw,
      title: 'Reposicionamento espiritual',
      description:
        'Retomar o lugar de quem decide com propósito, não apenas de quem reage às circunstâncias.',
    },
  ]

  const uses = [
    'Buscar mudança de vida',
    'Vencer vícios',
    'Sair de ciclos repetitivos',
    'Encontrar direção em momentos difíceis',
    'Se reposicionar espiritualmente',
  ]

  const contents = [
    'O que o jejum realmente significa',
    'Como começar de forma equilibrada',
    'O que fazer durante o jejum',
    'Como organizar seus momentos de oração',
    'Quais erros evitar',
    'Como encerrar corretamente',
    'Um plano prático de 7 dias para aplicar',
  ]

  return (
    <main className="min-h-screen bg-brand-cream text-brand-forest-dark overflow-x-hidden">
      {/* ========================================================== */}
      {/* 1. HERO SECTION                                             */}
      {/* ========================================================== */}
      <section className="relative isolate min-h-[100svh] flex items-center justify-center text-white bg-brand-forest-dark overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={IMG.hero}
            alt="Pessoa em oração ao nascer do sol"
            fill
            priority
            sizes="100vw"
            className="object-cover hero-image-pan"
          />
          <div className="absolute inset-0 hero-overlay-rich" />
          <div className="absolute inset-0 surface-grid" aria-hidden="true" />
        </div>

        <div
          className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ff7a40]/20 blur-3xl hero-orb"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-[#ffd0a4]/15 blur-3xl hero-orb"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-24 sm:py-32 text-center">
          {/* Logo */}
          <Reveal>
            <div className="flex justify-center mb-8">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden ring-2 ring-[#ff9b71]/45 shadow-lg bg-brand-forest-dark/40 backdrop-blur-sm">
                <Image
                  src="/logo.png"
                  alt="Jejum Bíblico na Prática"
                  fill
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-contain scale-200"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>Guia digital · Acesso imediato</Eyebrow>
          </Reveal>

          <Reveal delay={220}>
            <h1 className="font-serif uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mt-6 mb-8 max-w-4xl mx-auto text-[#f2efe3]">
              Você sente que precisa de uma resposta.
              <br />
              <em className="not-italic text-[#f7c7b3]">Mas não sabe mais o que fazer?</em>
            </h1>
          </Reveal>

          <Reveal delay={320}>
            <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto text-amber-50/90 font-light">
              Aprenda a praticar o jejum de forma bíblica, com direção, equilíbrio
              e propósito — mesmo que você nunca tenha feito antes.
            </p>
          </Reveal>

          <Reveal delay={440}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <CTAButton size="lg">Quero começar agora</CTAButton>
              <div className="flex items-center gap-2 text-sm text-amber-50/80 font-mono">
                <ShieldCheck className="h-4 w-4 text-[#ffdcb8]" />
                <span>Compra segura · Acesso imediato</span>
              </div>
            </div>
          </Reveal>

          {/* subtle chevron */}
          <Reveal delay={600}>
            <div className="mt-16 flex justify-center text-amber-100/60">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 2. IDENTIFICATION / PAIN SECTION                            */}
      {/* ========================================================== */}
      <section className="py-20 sm:py-28 bg-brand-cream">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-lg overflow-hidden bg-secondary shadow-[0_20px_40px_-20px_rgba(13,59,46,0.35)]">
              <Image
                src={IMG.identification}
                alt="Pessoa pensativa em momento de introspecção junto à janela"
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>Talvez você se identifique</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-brand-forest mt-5 mb-6">
                Talvez você não esteja procurando mais informação.
                <br />
                <em className="not-italic text-brand-forest/80">Talvez você só esteja cansado.</em>
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <ul className="space-y-4 text-lg text-brand-forest-dark/85 font-light leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                  <span>Cansado de tentar mudar algumas coisas e continuar no mesmo lugar.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                  <span>Cansado de orar, mas não ter clareza do que fazer depois.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                  <span>Cansado de carregar situações que parecem não avançar.</span>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-8 pt-8 border-t border-brand-sage/60">
                <p className="text-lg sm:text-xl font-serif italic text-brand-forest">
                  Tem área da sua vida que parece travada.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {['Emocional', 'Espiritual', 'Prática'].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-brand-sage bg-white/60 px-4 py-1.5 text-sm text-brand-forest"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-base text-brand-forest-dark/75 leading-relaxed">
                  E o mais difícil é que, por fora, muita gente acha que está tudo bem.
                  <br />
                  <span className="text-brand-forest font-medium">Mas você sabe que não está.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 3. DOUBTS SECTION                                           */}
      {/* ========================================================== */}
      <section className="py-20 sm:py-28 bg-brand-cream-dark">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="md:order-2">
            <Reveal>
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-lg overflow-hidden bg-secondary shadow-[0_20px_40px_-20px_rgba(13,59,46,0.35)]">
                <Image
                  src={IMG.doubts}
                  alt="Pessoa refletindo com expressão pensativa"
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="md:order-1">
            <Reveal>
              <Eyebrow>No fundo, ainda existem dúvidas</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-brand-forest mt-5 mb-6">
                Você já pensou em fazer jejum.
                <br />
                <em className="not-italic text-brand-forest/80">Mas surgiram perguntas que ninguém respondeu direito.</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base sm:text-lg text-brand-forest-dark/80 mb-6 font-light">
                Talvez você já tenha ouvido falar. Talvez já tenha tentado.
              </p>
            </Reveal>

            <div className="grid gap-3">
              {[
                'Será que eu sei fazer isso corretamente?',
                'Quanto tempo devo jejuar?',
                'O que eu faço durante o jejum?',
                'E se eu fizer errado?',
                'E se eu não sentir nada?',
              ].map((q, i) => (
                <Reveal key={q} delay={260 + i * 80}>
                  <div className="group flex items-start gap-3 rounded-md border border-brand-sage/70 bg-white/70 px-4 py-3 hover:bg-white hover:border-brand-gold/60 transition-colors">
                    <CircleHelp className="h-5 w-5 mt-0.5 text-brand-gold flex-shrink-0" />
                    <span className="text-brand-forest-dark/90 text-base">{q}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={700}>
              <div className="mt-8 rounded-md bg-brand-forest/5 border-l-4 border-brand-gold px-5 py-4">
                <p className="font-serif text-lg sm:text-xl text-brand-forest">
                  E sem clareza, você adia.
                </p>
                <p className="text-brand-forest-dark/75 mt-1">
                  Não por falta de fé. <span className="font-medium text-brand-forest">Mas por falta de direção.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 4. BELIEF BREAK SECTION                                     */}
      {/* ========================================================== */}
      <section className="relative py-20 sm:py-28 bg-[#f2efe8] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-70"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(90deg, hsl(210 40% 30% / 0.06) 1px, transparent 1px), linear-gradient(0deg, hsl(210 40% 30% / 0.06) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-lg overflow-hidden bg-secondary shadow-[0_20px_40px_-20px_rgba(13,59,46,0.35)]">
              <Image
                src={IMG.bible}
                alt="Bíblia aberta sobre mesa de madeira com luz natural suave"
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>O problema não é você</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-serif uppercase text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#173a59] mt-5 mb-6">
                A maioria das pessoas <em className="not-italic text-[#2d4f6d]/85">nunca foi ensinada</em>.
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <div className="space-y-4 text-lg text-[#4c5f72] font-light leading-relaxed">
                <p>Aprendem por vídeos soltos.</p>
                <p>Por testemunhos de outras pessoas.</p>
                <p>Por tentativas.</p>
              </div>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-8 rounded-lg bg-[#f9f8f4] border border-[#d7d2ca] shadow-[0_14px_28px_-18px_rgba(23,58,89,0.35)] p-6">
                <p className="text-[#44576a] leading-relaxed">
                  E acabam achando que jejum é apenas{' '}
                  <span className="italic">“ficar sem comer”</span>.
                </p>
                <p className="mt-3 font-serif uppercase text-2xl text-[#173a59]">Mas não é.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 5. FASTING EXPLANATION SECTION                              */}
      {/* ========================================================== */}
      <section className="py-20 sm:py-28 bg-brand-forest text-amber-50 relative overflow-hidden">
        {/* subtle decorative circle */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-sage/10 blur-3xl" aria-hidden="true" />

        <div className="relative max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="md:order-2">
            <Reveal>
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-lg overflow-hidden bg-brand-forest-dark shadow-2xl ring-1 ring-amber-200/10">
                <Image
                  src={IMG.fasting}
                  alt="Mãos sobre bíblia aberta com elementos espirituais"
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="md:order-1">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.22em] text-amber-200 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                <span>O que o jejum realmente é</span>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-amber-50 mt-5 mb-6">
                O jejum, quando feito com entendimento,
                <br />
                <em className="not-italic text-amber-200">muda o seu posicionamento.</em>
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="text-amber-50/80 font-light text-lg mb-6 leading-relaxed">
                Na Bíblia, o jejum aparece em momentos reais:
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Quando alguém precisava de resposta',
                'Quando precisava de direção',
                'Quando precisava vencer algo interno',
                'Quando precisava de mudança',
              ].map((item, i) => (
                <Reveal key={item} delay={300 + i * 100}>
                  <div className="flex items-start gap-3 rounded-md bg-white/5 border border-amber-200/15 px-4 py-3 hover:bg-white/10 hover:border-amber-200/30 transition-colors">
                    <BookMarked className="h-5 w-5 mt-0.5 text-amber-300 flex-shrink-0" />
                    <span className="text-amber-50/90 text-sm leading-snug">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={760}>
              <OrnamentDivider />
            </Reveal>

            <Reveal delay={820}>
              <div className="space-y-2 text-amber-50 font-serif text-xl sm:text-2xl leading-snug">
                <p className="italic">Não era ritual.</p>
                <p className="italic">Era decisão.</p>
                <p className="italic">Era parar o automático</p>
                <p className="text-amber-200">e se colocar diante de Deus com intenção.</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Talvez seja isso que está faltando subsection */}
        <div className="relative max-w-[1200px] mx-auto px-6 mt-24">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <Eyebrow>
                <span className="text-amber-200">Talvez seja isso que está faltando</span>
              </Eyebrow>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-amber-50 mt-5 leading-tight">
                Não mais esforço.
                <br />
                <em className="not-italic text-amber-200">Mas clareza.</em>
              </h3>
              <p className="text-amber-50/75 mt-6 font-light text-lg">Porque sem direção:</p>
            </div>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: RefreshCcw, label: 'Você ora, mas não avança' },
              { icon: CircleAlert, label: 'Você tenta mudar, mas não sustenta' },
              { icon: Compass, label: 'Você quer sair da situação, mas não sabe como' },
            ].map((it, i) => (
              <Reveal key={it.label} delay={200 + i * 140}>
                <div className="rounded-md bg-white/5 border border-amber-200/15 p-5 h-full hover:bg-white/10 hover:border-amber-200/30 transition-colors">
                  <it.icon className="h-6 w-6 text-amber-300 mb-3" />
                  <p className="text-amber-50/90">{it.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={700}>
            <p className="text-center mt-10 text-amber-50/70 max-w-2xl mx-auto">
              E isso vai desgastando. Seja em lutas internas, seja em hábitos difíceis,
              seja em momentos de desânimo, seja em áreas travadas da vida.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 6. BENEFITS SECTION                                         */}
      {/* ========================================================== */}
      <section className="py-20 sm:py-28 bg-brand-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <Eyebrow>O que o jejum pode te ajudar a buscar</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-brand-forest mt-5">
                Não como promessa vazia.
                <br />
                <em className="not-italic text-brand-forest/80">Mas como prática consciente.</em>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {benefits?.map?.((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <div className="group h-full rounded-lg bg-white paper-card p-6 sm:p-7 hover:-translate-y-1 hover:shadow-[0_18px_36px_-12px_rgba(13,59,46,0.3)] transition-all duration-300">
                  <div className="h-12 w-12 rounded-md bg-brand-forest/5 border border-brand-gold/40 flex items-center justify-center text-brand-forest group-hover:bg-brand-gold/15 transition-colors">
                    <b.icon className="h-6 w-6 text-brand-forest" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl sm:text-2xl text-brand-forest leading-tight">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-brand-forest-dark/70 leading-relaxed text-[15px]">
                    {b.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 7. WHO IS THIS FOR SECTION                                  */}
      {/* ========================================================== */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-brand-forest-dark">
        <div className="absolute inset-0">
          <Image
            src={IMG.whoisthisfor}
            alt="Pessoa caminhando em direção ao horizonte ao entardecer"
            fill
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, hsl(158 60% 10% / 0.97) 0%, hsl(158 58% 18% / 0.95) 50%, hsl(158 58% 18% / 0.92) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>
                <span className="text-amber-200">Gente usa o jejum para</span>
              </Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-amber-50 mt-5">
                Aplicações reais
                <br />
                <em className="not-italic text-amber-200">para questões reais.</em>
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {uses?.map?.((item, i) => (
              <Reveal key={item} delay={i * 120}>
                <div className="h-full rounded-md bg-white/10 backdrop-blur-sm border border-amber-200/20 px-5 py-6 hover:bg-white/15 hover:border-amber-200/40 transition-all">
                  <div className="text-amber-300 font-mono text-sm mb-2">0{i + 1}</div>
                  <p className="text-amber-50 leading-snug">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={700}>
            <div className="mt-14 max-w-3xl mx-auto text-center">
              <h3 className="font-serif text-2xl sm:text-3xl text-amber-50">
                Mas sem orientação, vira frustração.
              </h3>
              <div className="mt-6 grid sm:grid-cols-2 gap-3 text-left">
                {[
                  'Fica horas sem comer',
                  'Não sabe como orar',
                  'Não sabe o que fazer',
                  'Não sabe como encerrar',
                ].map((x) => (
                  <div key={x} className="flex items-center gap-3 text-amber-50">
                    <CircleAlert className="h-5 w-5 text-amber-300 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{x}</span>
                  </div>
                ))}
              </div>
              <p className="mt-7 text-amber-50">
                E termina pensando que não funcionou.
              </p>
              <p className="mt-2 font-serif italic text-xl sm:text-2xl text-amber-200">
                Mas o problema não foi o jejum. Foi a falta de direção.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 8. PRODUCT SECTION                                          */}
      {/* ========================================================== */}
      <section id="produto" className="py-20 sm:py-28 bg-brand-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <Eyebrow>Foi por isso que nasceu o guia</Eyebrow>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-brand-forest mt-6">
                Jejum Bíblico
                <br />
                <em className="not-italic text-brand-gold">na Prática</em>
              </h2>
              <p className="mt-6 text-lg text-brand-forest-dark/80 font-light leading-relaxed">
                Um material simples, direto e honesto. Para quem quer aprender
                a jejuar com entendimento.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {['Sem exagero', 'Sem confusão', 'Sem pressão'].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-brand-gold/50 bg-white px-4 py-1.5 text-sm text-brand-forest font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <EbookMockup />
            </Reveal>

            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-gold font-semibold mb-4">
                  <BookOpen className="h-4 w-4" />
                  Dentro do guia você vai aprender
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-forest leading-tight mb-6">
                  Tudo explicado de forma clara e aplicável.
                </h3>
              </Reveal>
              <ul className="space-y-3">
                {contents?.map?.((item, i) => (
                  <Reveal key={item} delay={200 + i * 80}>
                    <li className="flex items-start gap-3 rounded-md bg-white paper-card px-4 py-3 hover:border-brand-gold/60 transition-colors">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 text-brand-gold flex-shrink-0" />
                      <span className="text-brand-forest-dark/90">{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={900}>
                <div className="mt-8 rounded-md bg-brand-forest text-amber-50 px-6 py-5">
                  <p className="font-serif text-xl sm:text-2xl leading-tight">
                    Não é sobre fazer mais.
                    <br />
                    <em className="not-italic text-amber-200">É sobre fazer com direção.</em>
                  </p>
                  <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm text-amber-50/85">
                    <div>Você não precisa começar radical.</div>
                    <div>Você não precisa provar nada.</div>
                    <div>Você não precisa imitar ninguém.</div>
                  </div>
                  <p className="mt-4 text-amber-200 font-serif italic text-lg">
                    Você precisa entender.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 9. OFFER SECTION                                            */}
      {/* ========================================================== */}
      <section id="oferta" className="py-20 sm:py-28 bg-[#efece6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="max-w-3xl mx-auto">
              <div className="rounded-2xl bg-[#f8f7f4] overflow-hidden shadow-[0_30px_60px_-20px_rgba(23,58,89,0.28)] border border-[#d8d2c7]">
                {/* Top strip */}
                <div className="bg-[#14385a] text-[#eef3f7] px-6 sm:px-10 py-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-[#f2c77f]" />
                    <span className="text-sm uppercase tracking-[0.2em] font-semibold">
                      Acesso imediato
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[#e8edf3]/85">
                    <Smartphone className="h-4 w-4" />
                    <span className="text-xs sm:text-sm">Leia no celular, no seu tempo</span>
                  </div>
                </div>

                <div className="px-6 sm:px-10 py-10 sm:py-14 text-center">
                  <Eyebrow>Investimento</Eyebrow>
                  <h2 className="font-serif uppercase text-3xl sm:text-4xl md:text-5xl text-[#173a59] mt-5 leading-tight">
                    Acesso completo por
                  </h2>

                  <div className="mt-8 flex items-baseline justify-center gap-2">
                    <span className="font-serif text-2xl sm:text-3xl text-[#173a59]">R$</span>
                    <span className="font-serif font-semibold text-7xl sm:text-8xl text-[#173a59] leading-none">
                      19<span className="text-5xl sm:text-6xl">,90</span>
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#4e6072]/70">pagamento único</p>

                  <p className="mt-8 max-w-xl mx-auto text-[#4e6072]/90 font-light text-lg">
                    Um valor simples para algo que pode te dar{' '}
                    <span className="text-[#173a59] font-medium">clareza em um momento importante</span>{' '}
                    da sua vida.
                  </p>

                  <div className="mt-10">
                    <CTAButton size="lg">Quero acessar o guia</CTAButton>
                  </div>

                  <div className="mt-10 grid sm:grid-cols-3 gap-4 text-sm text-[#4e6072]/90">
                    <div className="flex items-center justify-center gap-2">
                      <Download className="h-4 w-4 text-[#df8359]" />
                      <span>Você recebe na hora</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="h-4 w-4 text-[#df8359]" />
                      <span>Leia no seu tempo</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-[#df8359]" />
                      <span>Compra 100% segura</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 10. GUARANTEE SECTION                                       */}
      {/* ========================================================== */}
      <section className="py-20 sm:py-24 bg-brand-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="max-w-3xl mx-auto rounded-lg bg-white paper-card p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              <div className="flex-shrink-0 h-20 w-20 rounded-full bg-brand-forest/5 border-2 border-brand-gold/60 flex items-center justify-center">
                <ShieldCheck className="h-10 w-10 text-brand-forest" />
              </div>
              <div>
                <Eyebrow>Garantia</Eyebrow>
                <h3 className="font-serif text-2xl sm:text-3xl text-brand-forest mt-3 leading-tight">
                  Sem complicação.
                </h3>
                <p className="mt-3 text-brand-forest-dark/80 leading-relaxed">
                  Se você não sentir que o material te ajudou a entender melhor
                  o jejum, pode solicitar reembolso dentro do prazo.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 11. FINAL CTA                                               */}
      {/* ========================================================== */}
      <section className="relative py-24 sm:py-32 overflow-hidden text-amber-50 bg-brand-forest-dark">
        <div className="absolute inset-0">
          <Image
            src={IMG.finalcta}
            alt="Raios de luz atravessando floresta ao amanhecer"
            fill
            sizes="100vw"
            className="object-cover opacity-28"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, hsl(162 58% 14% / 0.93) 0%, hsl(152 56% 20% / 0.9) 45%, hsl(158 62% 12% / 0.94) 100%)',
            }}
          />
          <div className="absolute inset-0 surface-grid opacity-45" aria-hidden="true" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <Reveal>
            <Eyebrow>
              <span className="text-amber-200">Único passo</span>
            </Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-serif uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mt-6 max-w-4xl mx-auto text-[#f3efe4]">
              Talvez o que esteja faltando
              <br />
              <em className="not-italic text-[#ead687]">não é força.</em>
            </h2>
          </Reveal>
          <Reveal delay={260}>
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f4e9cf] mt-4 italic">
              É direção.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <OrnamentDivider />
          </Reveal>
          <Reveal delay={500}>
            <p className="text-amber-50/85 text-lg sm:text-xl font-light max-w-xl mx-auto">
              E direção muda tudo.
            </p>
          </Reveal>
          <Reveal delay={620}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <CTAButton size="lg">Quero começar agora</CTAButton>
              <div className="flex items-center gap-2 text-sm text-amber-50/75 font-medium">
                <ShieldCheck className="h-4 w-4 text-[#ead687]" />
                <span>R$ 19,90 · Acesso imediato</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 12. FOOTER                                                  */}
      {/* ========================================================== */}
      <footer className="bg-brand-forest-dark text-amber-50">
        <div className="max-w-[1200px] mx-auto px-6 py-14">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 items-start">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full border border-amber-200/40 flex items-center justify-center text-amber-200">
                  <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                    <path
                      d="M24 10c-5 6-9 8-9 14a9 9 0 0018 0c0-6-4-8-9-14z"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-xl text-amber-50 leading-tight">Jejum Bíblico</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-200">na Prática</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-amber-50/90 max-w-sm">
                Um guia simples, direto e honesto para aprender a jejuar
                com entendimento, direção e propósito.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-amber-200 font-semibold">
                O guia
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href="#produto" className="text-amber-50/90 hover:text-amber-200 transition-colors">
                    Sobre o conteúdo
                  </a>
                </li>
                <li>
                  <a href="#oferta" className="text-amber-50/90 hover:text-amber-200 transition-colors">
                    Acesso e investimento
                  </a>
                </li>
                <li>
                  <a href="#oferta" className="text-amber-50/90 hover:text-amber-200 transition-colors">
                    Garantia
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-amber-200 font-semibold">
                Legal
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href="/termos" className="text-amber-50/90 hover:text-amber-200 transition-colors">
                    Termos de uso
                  </a>
                </li>
                <li>
                  <a href="/privacidade" className="text-amber-50/90 hover:text-amber-200 transition-colors">
                    Política de privacidade
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@jejumbiblico.com.br" className="text-amber-50/90 hover:text-amber-200 transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-amber-200/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-50/80">
            <p>© 2026 Jejum Bíblico na Prática. Todos os direitos reservados.</p>
            <p className="text-amber-50/70">
              Este conteúdo tem finalidade informativa e de edificação espiritual.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
