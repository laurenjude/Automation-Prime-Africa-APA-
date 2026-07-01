import GlassCard from '../components/GlassCard';
import TeamCard from '../components/TeamCard';
import CTASection from '../components/CTASection';
import ScrollFadeIn from '../components/ScrollFadeIn';

const values = [
  {
    word: 'Automate',
    desc: 'We eliminate manual processes that waste time and create errors. Every system we build replaces hours of repetitive work with seconds of automated execution.',
  },
  {
    word: 'Innovate',
    desc: 'We use cutting-edge AI and automation technology to solve real business problems. Not innovation for the sake of it — innovation that delivers measurable results.',
  },
  {
    word: 'Elevate',
    desc: 'We raise the standard of what African businesses can achieve operationally. Our systems give small firms the operational efficiency of enterprises.',
  },
];

const team = [
  { name: 'Lauren Jude', role: 'Technical Lead', description: 'Architect behind every system APA delivers.' },
  { name: 'Michael Aighobahi', role: 'Sales Lead', description: 'Turns conversations into signed agreements.' },
  { name: 'Caleb Andrew', role: 'Marketing Lead', description: 'Builds the brand that opens doors.' },
  { name: 'Adun Samuel', role: 'Operations Lead', description: 'Keeps every project running on schedule.' },
  { name: 'Robert Rocha', role: 'Strategy Lead', description: 'Points the company in the right direction.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
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

      {/* Our Story */}
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
                Automation Prime Africa started with a simple observation: while businesses in North America and Europe have access to thousands of automation tools and agencies, businesses across Africa are still running critical operations on paper, WhatsApp, and memory.
              </p>
              <p>
                The gap is not about technology. The tools exist. The gap is about implementation. African businesses need automation systems designed for how they actually operate — with local communication channels, market-specific workflows, and pricing that makes sense for the local economy.
              </p>
              <p className="text-white font-medium">
                That is exactly what we build.
              </p>
              <p>
                We are a team of five partners — engineers, marketers, and operators — building from the ground up. No outside funding. No corporate backing. Just a shared belief that African businesses deserve automation that works as well as anything built in San Francisco, London, or Berlin.
              </p>
              <p
                className="text-gold font-semibold text-lg border-l-4 pl-5"
                style={{ borderColor: '#D4A843' }}
              >
                The worst that can happen is we fail while trying. But we would rather build and fail than sit and wonder.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Values */}
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
            {values.map(({ word, desc }, i) => (
              <ScrollFadeIn key={word} delay={i * 120}>
                <GlassCard className="text-center h-full">
                  <h3 className="font-heading font-black text-3xl text-gradient-gold mb-4">{word}</h3>
                  <p className="text-white-muted text-sm leading-relaxed">{desc}</p>
                </GlassCard>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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

          {/* Scrollable row on mobile, grid on desktop */}
          <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible snap-x snap-mandatory">
            {team.map((member, i) => (
              <ScrollFadeIn key={member.name} delay={i * 100} className="snap-start flex-shrink-0 w-56 md:w-auto">
                <TeamCard {...member} />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
