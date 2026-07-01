import { Link, useNavigate } from 'react-router-dom';
import { Phone, Sun, Building2, Scale } from 'lucide-react';
import ValuePropBar from '../components/ValuePropBar';
import HowWeWork from '../components/HowWeWork';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import ScrollFadeIn from '../components/ScrollFadeIn';
import GoldWave from '../components/GoldWave';
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

// Inline keyframe styles injected once — Tailwind can't generate dynamic keyframe delays
const heroStyles = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-line {
    opacity: 0;
    animation: heroFadeUp 0.7s ease forwards;
  }
  .hero-line-1 { animation-delay: 0.15s; }
  .hero-line-2 { animation-delay: 0.35s; }
  .hero-line-3 { animation-delay: 0.55s; }
  .hero-logo   { opacity: 0; animation: heroFadeUp 0.6s ease 0s forwards; }
  .hero-input  { opacity: 0; animation: heroFadeUp 0.6s ease 0.75s forwards; }
  .hero-hint   { opacity: 0; animation: heroFadeUp 0.6s ease 0.95s forwards; }
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <style>{heroStyles}</style>

      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{ minHeight: '100vh', background: '#0D1117' }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center" style={{ paddingTop: '96px', paddingBottom: '220px' }}>

          {/* APA logo */}
          <div className="hero-logo mb-10">
            <img
              src="/logo.png"
              alt="Automation Prime Africa"
              style={{
                width: 'clamp(200px, 40vw, 320px)',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </div>

          {/* Headline — three staggered lines */}
          <h1 className="font-heading font-bold leading-tight mb-10" style={{ fontSize: 'clamp(1.85rem, 4.5vw, 2.75rem)' }}>
            <span className="block text-white hero-line hero-line-1">Smart Systems.</span>
            <span className="block text-white hero-line hero-line-2">Real Results.</span>
            <span className="block hero-line hero-line-3" style={{ color: '#D4A843' }}>Built for Africa.</span>
          </h1>

          {/* Decorative input bar */}
          <div className="hero-input w-full max-w-xl">
            <div
              className="flex items-center gap-2 px-3 py-2.5 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(212,168,67,0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <input
                type="text"
                placeholder="Type your automation idea"
                readOnly
                className="flex-1 bg-transparent outline-none text-sm px-3"
                style={{ color: '#A0A0A0', caretColor: '#D4A843' }}
                onFocus={(e) => { e.target.blur(); navigate('/contact'); }}
              />
              <button
                onClick={() => navigate('/contact')}
                className="flex-shrink-0 font-heading font-bold text-dark-primary text-sm rounded-full px-5 py-2.5"
                style={{ background: 'linear-gradient(135deg, #D4A843, #E8C36A)', whiteSpace: 'nowrap' }}
              >
                Create
              </button>
            </div>
          </div>

          {/* Hint text */}
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

        {/* Gold wave — anchored to bottom of hero */}
        <GoldWave />
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
