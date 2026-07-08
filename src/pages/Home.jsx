import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Sun, Building2, Scale } from "lucide-react";
import ValuePropBar from "../components/ValuePropBar";
import HowWeWork from "../components/HowWeWork";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import ScrollFadeIn from "../components/ScrollFadeIn";
import ServiceCarousel from "../components/ServiceCarousel";
import TypewriterText from "../components/TypewriterText";

const services = [
  {
    icon: Phone,
    title: "AI Voice Concierge",
    description:
      "24/7 AI phone agent for calls, bookings, and customer support. Never miss a customer call again.",
    stat: "Handles unlimited calls",
    industries: "Restaurants • Hotels • Clinics • Salons",
  },
  {
    icon: Sun,
    title: "Solar Lead Automation",
    description:
      "Instant lead response with personalized offers and automatic follow-up sequences.",
    stat: "Response in under 10 seconds",
    industries: "Solar Companies • Renewable Energy • Installers",
  },
  {
    icon: Building2,
    title: "Clinic Management System",
    description:
      "Automate patient bookings, reminders, payments, and the full treatment lifecycle.",
    stat: "5 automated workflows",
    industries: "Dental Clinics • Hospitals • Healthcare",
  },
  {
    icon: Scale,
    title: "LegalFlow AI",
    description:
      "Complete case management platform with dashboard, deadline tracking, billing, and morning briefings.",
    stat: "6 workflows + full dashboard",
    industries: "Law Firms • Legal Consultancies",
  },
];

const heroStyles = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
  @keyframes goldPulse {
    0%, 100% { text-shadow: 0 0 0px transparent; }
    50%       { text-shadow: 0 0 20px rgba(212, 168, 67, 0.4); }
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
  @keyframes showcaseGlow {
    0%, 100% { box-shadow: 0 0 0px transparent; }
    50%       { box-shadow: 0 0 24px rgba(212, 168, 67, 0.45); }
  }
  .showcase-glow { animation: showcaseGlow 2s ease-in-out infinite; }
`;

export default function Home() {
  const navigate = useNavigate();
  const heroImageRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = "/hero-bg.png";
    img.onload = () => {
      if (heroImageRef.current) {
        heroImageRef.current.style.opacity = "1";
      }
    };
  }, []);

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
          minHeight: "100vh",
          height: "100vh",
          maxHeight: "100vh",
          overflow: "hidden",
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(212, 168, 67, 0.15) 0%, rgba(212, 168, 67, 0.05) 30%, transparent 60%), #0D1117",
        }}>
        {/* Async image layer — opacity 0 → 1 when image loads */}
        <div
          ref={heroImageRef}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/hero-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            opacity: 0,
            transition: "opacity 0.5s ease",
          }}
        />

        {/* Gradient overlay */}
        <div
          className="hero-overlay absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,17,23,0.60) 0%, rgba(13,17,23,0.30) 40%, rgba(13,17,23,0.50) 70%, rgba(13,17,23,0.85) 100%)",
          }}
        />

        {/* Bottom content */}
        <div
          className="relative z-10 w-full max-w-3xl mx-auto px-6 flex flex-col items-center"
          style={{ paddingBottom: "25vh" }}>
          <h1
            className="hero-h1 font-heading font-bold leading-tight mb-8"
            style={{ fontSize: "clamp(1.875rem, 7vw, 2.75rem)" }}>
            <TypewriterText text="Smart Systems. Real Results. Built for Africa." />
          </h1>

          <div className="hero-input hero-input-wrap w-full max-w-xl">
            <div
              className="flex items-center gap-2 px-3 py-2.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(212,168,67,0.3)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}>
              <input
                type="text"
                placeholder="Type your automation idea"
                readOnly
                className="flex-1 bg-transparent outline-none text-sm px-3"
                style={{ color: "#A0A0A0" }}
                onFocus={(e) => {
                  e.target.blur();
                  navigate("/contact");
                }}
              />
              <button
                onClick={() => navigate("/contact")}
                className="flex-shrink-0 font-heading font-bold text-sm rounded-full px-5 py-2.5"
                style={{
                  background: "linear-gradient(135deg, #D4A843, #E8C36A)",
                  color: "#0D1117",
                  whiteSpace: "nowrap",
                }}>
                Create
              </button>
            </div>
          </div>

          <p
            className="hero-hint text-sm mt-5"
            style={{ color: "#A0A0A0" }}>
            Not sure where to start?{" "}
            <a
              href="https://calendly.com/automationprimeafrica"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-opacity hover:opacity-80"
              style={{ color: "#D4A843" }}>
              Let's build together.
            </a>
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          DESKTOP HERO — hidden below 768px, flex on desktop
          Two-column: text left, image right
          ════════════════════════════════════════════════════ */}
      <section
        className="hidden md:flex"
        style={{
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#0D1117",
        }}>
        {/* ── Left column: text content ── */}
        <div
          className="relative flex flex-col justify-center flex-shrink-0"
          style={{
            width: "52%",
            paddingTop: "80px",
            paddingLeft: "8vw",
            paddingRight: "3rem",
            paddingBottom: "3rem",
            backgroundColor: "#0D1117",
            boxSizing: "border-box",
          }}>
          {/* Subtle ambient gold glow behind text */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 30% 50%, rgba(212,168,67,0.06) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />

          {/* Headline */}
          <h1
            className="font-heading font-bold leading-tight relative z-10"
            style={{
              fontSize: "52px",
              lineHeight: 1.08,
              marginBottom: "2rem",
            }}>
            <TypewriterText text="Smart Systems. Real Results. Built for Africa." />
          </h1>

          {/* Input bar */}
          <div
            className="hero-input relative z-10"
            style={{
              width: "100%",
              maxWidth: "500px",
              marginBottom: "1.25rem",
            }}>
            <div
              className="flex items-center gap-2 px-3 py-2.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(212,168,67,0.3)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}>
              <input
                type="text"
                placeholder="Type your automation idea"
                readOnly
                className="flex-1 bg-transparent outline-none text-sm px-3"
                style={{ color: "#A0A0A0" }}
                onFocus={(e) => {
                  e.target.blur();
                  navigate("/contact");
                }}
              />
              <button
                onClick={() => navigate("/contact")}
                className="flex-shrink-0 font-heading font-bold text-sm rounded-full px-5 py-2.5"
                style={{
                  background: "linear-gradient(135deg, #D4A843, #E8C36A)",
                  color: "#0D1117",
                  whiteSpace: "nowrap",
                }}>
                Create
              </button>
            </div>
          </div>

          {/* Hint */}
          <p
            className="hero-hint text-sm relative z-10"
            style={{ color: "#A0A0A0" }}>
            Not sure where to start?{" "}
            <a
              href="https://calendly.com/automationprimeafrica"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-opacity hover:opacity-80"
              style={{ color: "#D4A843" }}>
              Let's build together.
            </a>
          </p>
        </div>

        {/* ── Right column: hero image ── */}
        <div
          className="relative flex-1"
          style={{ overflow: "hidden" }}>
          <img
            src="/hero-bg.png"
            alt="Africa automation visualization"
            loading="eager"
            fetchPriority="high"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
          {/* Left edge: seamless blend into text column */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "80px",
              height: "100%",
              background: "linear-gradient(to right, #0D1117, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          {/* Bottom edge: fade to site background */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100px",
              background: "linear-gradient(to top, #0D1117, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        </div>
      </section>

      {/* Value Props Bar */}
      <ValuePropBar />

      {/* Services Overview */}
      <section
        className="py-20 md:py-28"
        style={{ background: "#0D1117" }}>
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
        <div style={{ overflow: "hidden" }}>
          <ServiceCarousel services={services} />
        </div>
      </section>

      {/* How We Work */}
      <HowWeWork />

      {/* Stats */}
      <StatsSection />

      {/* Showcase */}
      <section className="py-20 md:py-28" style={{ background: '#1C2333' }}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-3">
                IN <span className="text-gradient-gold">ACTION</span>
              </h2>
              <div className="gold-line" />
              <p className="text-white-muted mt-5 text-base max-w-xl mx-auto">
                See what our systems look like in production
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={150}>
            <div className="max-w-3xl mx-auto">
              <div
                className="rounded-xl p-8"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(212,168,67,0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#D4A843' }}>
                  AI Voice Concierge — Live Demo
                </p>

                <h3 className="font-heading font-bold text-white mb-1" style={{ fontSize: '28px' }}>
                  Ember &amp; Bun
                </h3>
                <p className="font-semibold mb-5" style={{ color: '#D4A843', fontSize: '14px' }}>
                  Crafted Burgers. Real Flavor.
                </p>

                <p className="text-white-muted mb-8" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                  Ember &amp; Bun uses our AI Voice Concierge to handle phone orders and reservations 24/7.
                  Customers call, the AI takes their order, confirms details, and sends a confirmation.
                  No missed calls, no hold times, no additional staff needed. This is what automation
                  looks like when it is done right.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a
                    href="https://ember-and-bun-gules.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-outline text-sm text-center"
                    style={{ padding: '12px 24px' }}
                  >
                    Visit Ember &amp; Bun
                  </a>
                  <a
                    href="https://vapi.ai?demo=true&shareKey=a68ed201-6a32-4dd7-b462-12784a326f06&assistantId=40dcc6b5-7718-40ef-bca6-fedb514dd0b0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold showcase-glow text-sm text-center"
                    style={{ padding: '12px 24px' }}
                  >
                    Try The AI Agent
                  </a>
                </div>

                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
                  Powered by Automation Prime Africa
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
