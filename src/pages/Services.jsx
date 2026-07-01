import { Link } from 'react-router-dom';
import { Phone, Building2, Sun, Scale } from 'lucide-react';
import ScrollFadeIn from '../components/ScrollFadeIn';
import CTASection from '../components/CTASection';

const services = [
  {
    icon: Phone,
    title: 'AI Voice Concierge',
    problem: 'Your business misses phone calls during peak hours and after hours. Every missed call is a customer lost to a competitor.',
    solution: 'An AI phone agent that answers every call 24/7. Takes orders, books reservations, answers FAQs, escalates to staff, logs everything to your CRM, and sends confirmation emails.',
    stats: [
      { value: '100%', label: 'Calls Answered' },
      { value: '24/7/365', label: 'Availability' },
      { value: '₦80K–200K', label: 'Monthly Savings' },
      { value: '1–3 Weeks', label: 'Setup Time' },
    ],
    price: '$1,000 – $3,000',
    flip: false,
  },
  {
    icon: Building2,
    title: 'Clinic Management System',
    problem: 'Clinics manage bookings via WhatsApp, track payments in Excel, send reminders manually.',
    solution: 'Five automated workflows covering booking, appointment reminders, staff updates, payment tracking, and end-of-treatment flow with error monitoring.',
    stats: [
      { value: 'Up to 60%', label: 'No-Show Reduction' },
      { value: '10–15 Hrs', label: 'Admin Hours Saved Weekly' },
      { value: '5+1', label: 'Automated Workflows' },
      { value: '2–3 Weeks', label: 'Setup Time' },
    ],
    price: '$1,500 – $3,000',
    flip: true,
  },
  {
    icon: Sun,
    title: 'Solar Lead Automation',
    problem: 'Your sales team takes 24–48 hours to follow up. By then the customer has three other quotes.',
    solution: 'Instant personalised savings estimates, branded emails, WhatsApp messages, and automatic follow-up at 24 and 72 hours.',
    stats: [
      { value: '<10 Sec', label: 'Response Time' },
      { value: 'Up to 3x', label: 'Conversion Lift' },
      { value: '24hr + 72hr', label: 'Auto Follow-Up' },
      { value: '1–2 Weeks', label: 'Setup Time' },
    ],
    price: '$500 – $1,500',
    flip: false,
  },
  {
    icon: Scale,
    title: 'LegalFlow AI',
    problem: 'Law firms track cases in paper folders, deadlines in notebooks, invoices in Excel. One missed deadline can cost an entire case.',
    solution: 'Six interconnected workflows behind a branded web dashboard with login, case management, document classification, deadline tracking, billing, and morning executive briefings.',
    stats: [
      { value: 'Zero', label: 'Missed Deadlines' },
      { value: '6', label: 'Interconnected Workflows' },
      { value: 'Full', label: 'Web Dashboard' },
      { value: '3–6 Weeks', label: 'Setup Time' },
    ],
    price: '$3,000 – $10,000',
    flip: true,
  },
];

function ServiceBlock({ icon: Icon, title, problem, solution, stats, price, flip }) {
  return (
    <section className="py-16 md:py-24" style={{ background: flip ? '#161B22' : '#0D1117' }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollFadeIn>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            {/* Text side */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)' }}
                >
                  <Icon size={28} className="text-gold" />
                </div>
                <h2 className="font-heading font-black text-2xl md:text-3xl text-white">{title}</h2>
              </div>

              <div className="mb-6 p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="text-white-dim text-xs font-bold uppercase tracking-widest mb-2">The Problem</p>
                <p className="text-white-muted leading-relaxed">{problem}</p>
              </div>

              <div className="mb-8 p-5 rounded-xl" style={{ background: 'rgba(212,168,67,0.04)', border: '1px solid rgba(212,168,67,0.12)' }}>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">The Solution</p>
                <p className="text-white-muted leading-relaxed">{solution}</p>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <p className="text-white-dim text-xs uppercase tracking-widest mb-1">Investment</p>
                  <p className="font-heading font-black text-2xl text-gradient-gold">{price}</p>
                </div>
                <Link to="/contact" className="btn-gold ml-auto text-sm py-3 px-6 whitespace-nowrap">
                  Request a Demo
                </Link>
              </div>
            </div>

            {/* Stats side */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="glass-card p-6 text-center"
                >
                  <p className="font-heading font-black text-2xl text-gradient-gold mb-2">{value}</p>
                  <p className="text-white-muted text-sm leading-relaxed">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

export default function Services() {
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
            Our <span className="text-gradient-gold">Services</span>
          </h1>
          <div className="gold-line mb-5" />
          <p className="text-white-muted text-lg max-w-xl mx-auto leading-relaxed">
            Four production-ready automation systems designed for specific industries
          </p>
        </div>
      </section>

      {services.map((svc) => (
        <ServiceBlock key={svc.title} {...svc} />
      ))}

      <section className="py-16 text-center" style={{ background: '#1C2333' }}>
        <div className="max-w-xl mx-auto px-6">
          <ScrollFadeIn>
            <p className="text-white-muted text-lg mb-6">Not sure which system fits your business?</p>
            <Link to="/contact" className="btn-gold text-base px-10">
              Book a Free Consultation
            </Link>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
