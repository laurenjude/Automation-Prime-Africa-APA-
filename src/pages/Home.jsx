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
  .hero-line        { opacity: 0; animation: heroFadeUp 0.7s ease forwards; }
  .hero-line-1      { animation-delay: 0.2s; }
  .hero-line-2      { animation-delay: 0.38s; }
  .hero-line-3      { animation-delay: 0.56s; }
  .hero-input       { opacity: 0; animation: heroFadeUp 0.6s ease 0.74s forwards; }
  .hero-hint        { opacity: 0; animation: heroFadeUp 0.6s ease 0.92s forwards; }

  /* ── Mobile: shift image anchor to top so Africa map stays visible ── */
  @media (max-width: 767px) {
    .hero-section { background-position: center top !important; }
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
  /* ── Very small screens ── */
  @media (max-width: 374px) {
    .hero-h1        { font-size: 26px !important; }
    .hero-input-wrap { width: 95% !important; }
  }
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <style>{heroStyles}</style>

      {/* ── Hero ── */}
      <section
        className="hero-section relative flex flex-col justify-end text-center"
        style={{
          minHeight: '100vh',
          backgroundImage: 'url(/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark gradient overlay — keeps top dark for navbar, centre open for the map, bottom dark for text */}
        <div
          className="hero-overlay absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(13,17,23,0.60) 0%, rgba(13,17,23,0.30) 40%, rgba(13,17,23,0.50) 70%, rgba(13,17,23,0.85) 100%)',
          }}
        />

        {/* Content block — sits in the bottom third */}
        <div
          className="relative z-10 w-full max-w-3xl mx-auto px-6 flex flex-col items-center"
          style={{ paddingBottom: '60px' }}
        >
          {/* Headline */}
          <h1
            className="hero-h1 font-heading font-bold leading-tight mb-8"
            style={{ fontSize: 'clamp(1.875rem, 4.5vw, 2.75rem)' }}
          >
            <span className="block text-white hero-line hero-line-1">Smart Systems.</span>
            <span className="block text-white hero-line hero-line-2">Real Results.</span>
            <span className="block hero-line hero-line-3" style={{ color: '#D4A843' }}>Built for Africa.</span>
          </h1>

          {/* Decorative input bar */}
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
                style={{
                  background: 'linear-gradient(135deg, #D4A843, #E8C36A)',
                  color: '#0D1117',
                  whiteSpace: 'nowrap',
                }}
              >
                Create
              </button>
            </div>
          </div>

          {/* Hint */}
          <p className="hero-hint text-sm mt-5" style={{ color: '#A0A0A0' }}>
            Not sure where to start?{' '}
            <Link
              to="/contact"
              className="font-semibold transition-opacity hover:opacity-80"
              style={{ color: '#D4A843' }}
            >
              Let's build together.
            </Link>
          </p>
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
