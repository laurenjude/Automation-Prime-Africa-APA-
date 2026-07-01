import { Link } from 'react-router-dom';
import { Phone, Sun, Building2, Scale } from 'lucide-react';
import ValuePropBar from '../components/ValuePropBar';
import ServiceCard from '../components/ServiceCard';
import HowWeWork from '../components/HowWeWork';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import ScrollFadeIn from '../components/ScrollFadeIn';

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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(160deg, #0D1117 0%, #161B22 60%, #0D1117 100%)',
        }}
      >
        {/* Radial gold glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(212,168,67,0.08) 0%, rgba(212,168,67,0.02) 40%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
          {/* APA brand mark */}
          <div className="mb-8">
            <span
              className="font-heading font-black text-gradient-gold"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '-0.02em', lineHeight: 1 }}
            >
              APA
            </span>
          </div>

          <h1
            className="font-heading font-black text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Automate Today.{' '}
            <span className="text-gradient-gold">Lead Tomorrow.</span>
          </h1>

          <p className="text-white-muted text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Intelligent automation systems that save time, reduce errors, and grow your business.
          </p>

          <Link to="/contact" className="btn-gold text-base md:text-lg px-8 md:px-12 py-4">
            Let's Automate Your Business
          </Link>

          <p className="text-white-dim text-sm mt-7 tracking-wide">
            Smart Systems. Real Results. Built for Africa.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, #D4A843, transparent)' }} />
        </div>
      </section>

      {/* Value Props Bar */}
      <ValuePropBar />

      {/* Services Overview */}
      <section className="py-20 md:py-28" style={{ background: '#0D1117' }}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center mb-14">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-3">
                What We <span className="text-gradient-gold">Build</span>
              </h2>
              <div className="gold-line" />
              <p className="text-white-muted mt-5 text-base max-w-xl mx-auto">
                Four production-ready systems designed for specific industries
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <ScrollFadeIn key={svc.title} delay={i * 100}>
                <ServiceCard {...svc} />
              </ScrollFadeIn>
            ))}
          </div>
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
