import { Link, useNavigate } from 'react-router-dom';
import { Phone, Sun, Building2, Scale } from 'lucide-react';
import ValuePropBar from '../components/ValuePropBar';
import HowWeWork from '../components/HowWeWork';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import ScrollFadeIn from '../components/ScrollFadeIn';
import ServiceCarousel from '../components/ServiceCarousel';

const services = [
  {
    icon: Phone,
    title: 'AI Voice Concierge',
    description: '24/7 AI phone agent for calls, bookings, and customer support. Never miss a customer call again.',
    stat: 'Handles unlimited calls',
    industries: 'Restaurants • Hotels • Clinics • Salons',
  },
  {
    icon: Sun,
    title: 'Solar Lead Automation',
    description: 'Instant lead response with personalized offers and automatic follow-up sequences.',
    stat: 'Response in under 10 seconds',
    industries: 'Solar Companies • Renewable Energy • Installers',
  },
  {
    icon: Building2,
    title: 'Clinic Management System',
    description: 'Automate patient bookings, reminders, payments, and the full treatment lifecycle.',
    stat: '5 automated workflows',
    industries: 'Dental Clinics • Hospitals • Healthcare',
  },
  {
    icon: Scale,
    title: 'LegalFlow AI',
    description: 'Complete case management platform with dashboard, deadline tracking, billing, and morning briefings.',
    stat: '6 workflows + full dashboard',
    industries: 'Law Firms • Legal Consultancies',
  },
];

const heroStyles = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes wordReveal {
    0%   { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes goldPulse {
    0%, 100% { text-shadow: 0 0 0px transparent; }
    50%       { text-shadow: 0 0 20px rgba(212, 168, 67, 0.4); }
  }
  .hero-word {
    display: inline-block;
    opacity: 0;
    animation: wordReveal 0.5s ease-out forwards;
  }
  .hero-word-africa {
    animation: wordReveal 0.5s ease-out 1.10s forwards, goldPulse 2s 1.5s infinite;
  }
  .hero-input { opacity: 0; animation: heroFadeUp 0.6s ease 0.74s forwards; }
  .hero-hint  { opacity: 0; animation: heroFadeUp 0.6s ease 0.92s forwards; }

  @media (max-width: 767px) {
    .hero-section { background-position: center center !important; }
    .hero-overlay {
      background: linear-gradient(
        to bottom,
        rgba(13,17,23,0.70) 0%,
        rgba(13,17,23,0.40) 40%,
        rgba(13,17,23,0.60) 70%,
        rgba(13,17,23,0.95) 100%
      ) !important;
    }
  }
  @media (max-width: 374px) {
    .hero-h1         { font-size: 26px !important; }
    .hero-input-wrap { width: 95% !important; }
  }
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <style>{heroStyles}</style>

      {/* ════════════════════════════════════════════════════
          MOBILE HERO — visible below 768px, hidden on desktop
          Full-screen background image with overlay + bottom text
          ════════════════════════════════════════════════════ */}
      <section
        className="hero-section md:hidden relative flex flex-col justify-end text-center"
        style={{
          minHeight: '100vh',
          height: '100vh',
          maxHeight: '100vh',
          overflow: 'hidden',
          backgroundImage: 'url(/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Gradient overlay */}
        <div
          className="hero-overlay absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(13,17,23,0.60) 0%, rgba(13,17,23,0.30) 40%, rgba(13,17,23,0.50) 70%, rgba(13,17,23,0.85) 100%)',
          }}
        />

        {/* Bottom content */}
        <div
          className="relative z-10 w-full max-w-3xl mx-auto px-6 flex flex-col items-center"
          style={{ paddingBottom: '25vh' }}
        >
          <h1
            className="hero-h1 font-heading font-bold leading-tight mb-8"
            style={{ fontSize: 'clamp(1.875rem, 7vw, 2.75rem)' }}
          >
            <span className="block text-white">
              <span className="hero-word" style={{ animationDelay: '0.20s' }}>Smart </span>
              <span className="hero-word" style={{ animationDelay: '0.35s' }}>Systems.</span>
            </span>
            <span className="block text-white">
              <span className="hero-word" style={{ animationDelay: '0.50s' }}>Real </span>
              <span className="hero-word" style={{ animationDelay: '0.65s' }}>Results.</span>
            </span>
            <span className="block">
              <span className="hero-word" style={{ animationDelay: '0.80s' }}>Built </span>
              <span className="hero-word" style={{ animationDelay: '0.95s' }}>for </span>
              <span className="hero-word hero-word-africa" style={{ color: '#D4A843' }}>Africa.</span>
            </span>
          </h1>

          <div className="hero-input hero-input-wrap w-full max-w-xl">
            <div
              className="flex items-center gap-2 px-3 py-2.5 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(212,168,67,0.3)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <input
                type="text"
                placeholder="Type your automation idea"
                readOnly
                className="flex-1 bg-transparent outline-none text-sm px-3"
                style={{ color: '#A0A0A0' }}
                onFocus={(e) => { e.target.blur(); navigate('/contact'); }}
              />
              <button
                onClick={() => navigate('/contact')}
                className="flex-shrink-0 font-heading font-bold text-sm rounded-full px-5 py-2.5"
                style={{ background: 'linear-gradient(135deg, #D4A843, #E8C36A)', color: '#0D1117', whiteSpace: 'nowrap' }}
              >
                Create
              </button>
            </div>
          </div>

          <p className="hero-hint text-sm mt-5" style={{ color: '#A0A0A0' }}>
            Not sure where to start?{' '}
            <Link to="/contact" className="font-semibold transition-opacity hover:opacity-80" style={{ color: '#D4A843' }}>
              Let's build together.
            </Link>
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          DESKTOP HERO — hidden below 768px, flex on desktop
          Two-column: text left, image right
          ════════════════════════════════════════════════════ */}
      <section
        className="hidden md:flex"
        style={{ height: '100vh', overflow: 'hidden', backgroundColor: '#0D1117' }}
      >
        {/* ── Left column: text content ── */}
        <div
          className="relative flex flex-col justify-center flex-shrink-0"
          style={{
            width: '52%',
            paddingTop: '80px',
            paddingLeft: '8vw',
            paddingRight: '3rem',
            paddingBottom: '3rem',
            backgroundColor: '#0D1117',
            boxSizing: 'border-box',
          }}
        >
          {/* Subtle ambient gold glow behind text */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 30% 50%, rgba(212,168,67,0.06) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />

          {/* Headline */}
          <h1
            className="font-heading font-bold leading-tight relative z-10"
            style={{ fontSize: '52px', lineHeight: 1.08, marginBottom: '2rem' }}
          >
            <span className="block text-white">
              <span className="hero-word" style={{ animationDelay: '0.20s' }}>Smart </span>
              <span className="hero-word" style={{ animationDelay: '0.35s' }}>Systems.</span>
            </span>
            <span className="block text-white">
              <span className="hero-word" style={{ animationDelay: '0.50s' }}>Real </span>
              <span className="hero-word" style={{ animationDelay: '0.65s' }}>Results.</span>
            </span>
            <span className="block">
              <span className="hero-word" style={{ animationDelay: '0.80s' }}>Built </span>
              <span className="hero-word" style={{ animationDelay: '0.95s' }}>for </span>
              <span className="hero-word hero-word-africa" style={{ color: '#D4A843' }}>Africa.</span>
            </span>
          </h1>

          {/* Input bar */}
          <div className="hero-input relative z-10" style={{ width: '100%', maxWidth: '500px', marginBottom: '1.25rem' }}>
            <div
              className="flex items-center gap-2 px-3 py-2.5 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(212,168,67,0.3)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <input
                type="text"
                placeholder="Type your automation idea"
                readOnly
                className="flex-1 bg-transparent outline-none text-sm px-3"
                style={{ color: '#A0A0A0' }}
                onFocus={(e) => { e.target.blur(); navigate('/contact'); }}
              />
              <button
                onClick={() => navigate('/contact')}
                className="flex-shrink-0 font-heading font-bold text-sm rounded-full px-5 py-2.5"
                style={{ background: 'linear-gradient(135deg, #D4A843, #E8C36A)', color: '#0D1117', whiteSpace: 'nowrap' }}
              >
                Create
              </button>
            </div>
          </div>

          {/* Hint */}
          <p className="hero-hint text-sm relative z-10" style={{ color: '#A0A0A0' }}>
            Not sure where to start?{' '}
            <Link to="/contact" className="font-semibold transition-opacity hover:opacity-80" style={{ color: '#D4A843' }}>
              Let's build together.
            </Link>
          </p>
        </div>

        {/* ── Right column: hero image ── */}
        <div className="relative flex-1" style={{ overflow: 'hidden' }}>
          <img
            src="/hero-bg.png"
            alt="Africa automation visualization"
            loading="eager"
            fetchPriority="high"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
          {/* Left edge: seamless blend into text column */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '80px', height: '100%',
              background: 'linear-gradient(to right, #0D1117, transparent)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
          {/* Bottom edge: fade to site background */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: 0, left: 0,
              width: '100%', height: '100px',
              background: 'linear-gradient(to top, #0D1117, transparent)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
        </div>
      </section>

      {/* Value Props Bar */}
      <ValuePropBar />

      {/* Services Overview */}
      <section className="py-20 md:py-28" style={{ background: '#0D1117' }}>
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <ScrollFadeIn>
            <div className="text-center">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-3">
                What We <span className="text-gradient-gold">Build</span>
              </h2>
              <div className="gold-line" />
              <p className="text-white-muted mt-5 text-base max-w-xl mx-auto">
                Four production-ready systems designed for specific industries
              </p>
            </div>
          </ScrollFadeIn>
        </div>

        {/* Auto-scrolling carousel — full bleed so cards can overflow section padding */}
        <div style={{ overflow: 'hidden' }}>
          <ServiceCarousel services={services} />
        </div>
      </section>

      {/* How We Work */}
      <HowWeWork />

      {/* Stats */}
      <StatsSection />

      {/* CTA */}
      <CTASection />
    </>
  );
}
