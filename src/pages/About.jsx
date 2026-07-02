import { useRef } from 'react';
import GlassCard from '../components/GlassCard';
import TeamCard from '../components/TeamCard';
import CTASection from '../components/CTASection';
import ScrollFadeIn from '../components/ScrollFadeIn';

/* ── Data ─────────────────────────────────────────────────────────── */

const values = [
  {
    title: 'We Solve Before We Sell',
    desc: 'We never pitch a solution until we understand the problem. Every engagement starts with listening. We learn how your business actually operates today, where the pain is, and what would change if that pain disappeared. Only then do we design a system. This means we sometimes tell a potential client that they do not need automation yet. That honesty is what builds trust.',
  },
  {
    title: 'Reliability Over Impressiveness',
    desc: 'The most impressive demo means nothing if the system breaks at 2am on a Sunday. We choose the solution that works every single time over the solution that looks the most cutting edge. Our systems run on logic that never fails, never hits a rate limit, and never depends on a third party staying online. When we hand you a system, it works. Period.',
  },
  {
    title: 'Your Team Should Never See The Complexity',
    desc: 'The best automation is invisible. Your receptionist should not need to understand workflows. Your lawyer should not need to think about API calls. Your sales team should not care how the follow up email gets sent. They log into a clean interface, press a button, and the result happens. Everything complicated lives underneath where only we need to worry about it.',
  },
];

const team = [
  { name: 'Lauren Jude',       role: 'Technical Lead',   description: 'Architect behind every system APA delivers.' },
  { name: 'Michael Aighobahi', role: 'Sales Lead',        description: 'Turns conversations into signed agreements.' },
  { name: 'Caleb Andrew',      role: 'Marketing Lead',    description: 'Builds the brand that opens doors.' },
  { name: 'Adun Samuel',       role: 'Operations Lead',   description: 'Keeps every project running on schedule.' },
  { name: 'Robert Rocha',      role: 'Strategy Lead',     description: 'Points the company in the right direction.' },
];

/* ── Mobile team carousel CSS ─────────────────────────────────────── */

const teamCarouselCSS = `
@keyframes teamScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.tc-wrap  { overflow: hidden; position: relative; }
.tc-track {
  display: flex;
  width: max-content;
  animation: teamScroll 20s linear infinite;
  will-change: transform;
  padding: 8px 0 20px;
}
.tc-wrap:hover .tc-track { animation-play-state: paused; }
.tc-card  { flex-shrink: 0; width: 260px; margin-right: 16px; }
`;

/* ── Component ────────────────────────────────────────────────────── */

export default function About() {
  const trackRef = useRef(null);

  const pauseTrack  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'; };
  const resumeTrack = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running'; };

  const doubled = [...team, ...team];

  return (
    <>
      <style>{teamCarouselCSS}</style>

      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          minHeight: '50vh',
          background: 'linear-gradient(160deg, #0D1117 0%, #1B2A4A 100%)',
          paddingTop: '100px',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 60%, rgba(212,168,67,0.07) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 px-6 py-16">
          <h1 className="font-heading font-black text-white mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            About <span className="text-gradient-gold">Us</span>
          </h1>
          <div className="gold-line mb-5" />
          <p className="text-white-muted text-lg max-w-xl mx-auto leading-relaxed">
            We are building the automation infrastructure African businesses deserve.
          </p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 md:py-28" style={{ background: '#0D1117' }}>
        <div className="max-w-4xl mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-3">
                Our <span className="text-gradient-gold">Story</span>
              </h2>
              <div className="gold-line" />
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={100}>
            <div className="glass-card p-8 md:p-12 space-y-6 text-white-muted text-base leading-relaxed">
              <p>
                Automation Prime Africa started because we kept seeing the same thing over and over.
                Businesses across Africa running on paper, WhatsApp, and memory. Not because they
                wanted to, but because nobody was building the tools they actually needed.
              </p>
              <p>
                International automation software costs international prices and is designed for
                international workflows. A law firm in Lagos does not operate the same way as a law
                firm in London. A clinic in Abuja does not run like a clinic in New York. The tools
                need to be different because the businesses are different.
              </p>
              <p className="text-white font-medium">
                So we decided to build those tools ourselves.
              </p>
              <p>
                We are five partners who met through the work, not through a business plan. An
                engineer, a salesman, a marketer, an operations mind, and a strategist. Nobody
                invested in us. Nobody gave us permission. We just started building and the work
                spoke for itself.
              </p>
              <p>
                Fifteen production systems later, we are still building. Still learning. Still
                getting better at turning manual chaos into automated clarity.
              </p>
              <p
                className="text-gold font-semibold text-lg border-l-4 pl-5"
                style={{ borderColor: '#D4A843' }}
              >
                The worst that can happen is we fail while trying. But we would rather build and
                fail than sit and wonder what could have been.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 md:py-28" style={{ background: '#1C2333' }}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-3">
                Our <span className="text-gradient-gold">Values</span>
              </h2>
              <div className="gold-line" />
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ title, desc }, i) => (
              <ScrollFadeIn key={title} delay={i * 120}>
                <GlassCard className="text-center h-full">
                  <h3 className="font-heading font-black text-xl md:text-2xl text-gradient-gold mb-4 leading-snug">
                    {title}
                  </h3>
                  <p className="text-white-muted text-sm leading-relaxed">{desc}</p>
                </GlassCard>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 md:py-28" style={{ background: '#0D1117' }}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-3">
                The <span className="text-gradient-gold">Team</span>
              </h2>
              <div className="gold-line" />
            </div>
          </ScrollFadeIn>

          {/* ── Mobile: auto-scrolling carousel (hidden on md+) ── */}
          <div
            className="tc-wrap md:hidden"
            onMouseEnter={pauseTrack}
            onMouseLeave={resumeTrack}
            onTouchStart={pauseTrack}
            onTouchEnd={resumeTrack}
          >
            <div className="tc-track" ref={trackRef}>
              {doubled.map((member, i) => (
                <div key={`${member.name}-${i}`} className="tc-card">
                  <TeamCard {...member} />
                </div>
              ))}
            </div>
          </div>

          {/* ── Desktop: static grid (hidden below md) ── */}
          <div className="hidden md:grid md:grid-cols-5 gap-5">
            {team.map((member, i) => (
              <ScrollFadeIn key={member.name} delay={i * 100}>
                <TeamCard {...member} />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Ready to Work With Us?"
        subtitle="Book a free consultation and let's explore how automation can transform your business."
        primaryLabel="Book a Consultation"
        primaryTo="/contact"
        secondaryLabel="View Our Services"
        secondaryTo="/services"
      />
    </>
  );
}
