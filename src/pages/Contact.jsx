import { Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import ScrollFadeIn from '../components/ScrollFadeIn';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100084303461224', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/automationprimeafrica', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/automationprimeafrica/', label: 'LinkedIn' },
  { icon: WhatsAppIcon, href: 'https://whatsapp.com/channel/0029VbCQ3NkCHDydnXDmiL3C', label: 'WhatsApp Channel' },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          minHeight: '40vh',
          background: 'linear-gradient(160deg, #0D1117 0%, #1B2A4A 100%)',
          paddingTop: '100px',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 60%, rgba(212,168,67,0.07) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 px-6 py-14">
          <h1 className="font-heading font-black text-white mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            Let's <span className="text-gradient-gold">Talk</span>
          </h1>
          <div className="gold-line mb-5" />
          <p className="text-white-muted text-lg max-w-xl mx-auto leading-relaxed">
            Ready to automate your business? Get in touch and we will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 md:py-28" style={{ background: '#0D1117' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form — takes 2 columns */}
            <div className="lg:col-span-2">
              <ScrollFadeIn>
                <h2 className="font-heading font-bold text-white text-xl mb-6">Send Us a Message</h2>
                <ContactForm />
              </ScrollFadeIn>
            </div>

            {/* Contact info */}
            <div>
              <ScrollFadeIn delay={100}>
                <h2 className="font-heading font-bold text-white text-xl mb-6">Contact Info</h2>

                <div className="flex flex-col gap-5 mb-8">
                  <a
                    href="mailto:info@automationprimeafrica.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-gold"
                      style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)' }}>
                      <Mail size={18} className="text-gold group-hover:text-dark-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-white-dim text-xs uppercase tracking-widest mb-1">General</p>
                      <p className="text-white-muted text-sm group-hover:text-gold transition-colors">info@automationprimeafrica.com</p>
                    </div>
                  </a>

                  <a
                    href="mailto:support@automationprimeafrica.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-gold"
                      style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)' }}>
                      <Mail size={18} className="text-gold group-hover:text-dark-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-white-dim text-xs uppercase tracking-widest mb-1">Support</p>
                      <p className="text-white-muted text-sm group-hover:text-gold transition-colors">support@automationprimeafrica.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.2)' }}>
                      <MapPin size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-white-dim text-xs uppercase tracking-widest mb-1">Location</p>
                      <p className="text-white-muted text-sm">Lagos, Nigeria</p>
                      <p className="text-white-dim text-xs mt-0.5">Serving Africa & internationally</p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div>
                  <p className="text-white-dim text-xs uppercase tracking-widest mb-4">Follow Us</p>
                  <div className="flex flex-col gap-3">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white-muted hover:text-gold transition-colors group"
                      >
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors group-hover:bg-gold"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                          <Icon size={18} className="group-hover:text-dark-primary transition-colors" />
                        </div>
                        <span className="text-sm">{label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-8 p-5 rounded-xl" style={{ background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.2)' }}>
                  <p className="text-white text-sm font-semibold mb-2">Prefer WhatsApp?</p>
                  <p className="text-white-muted text-xs mb-4 leading-relaxed">Message us directly for a quick chat about your project.</p>
                  <a
                    href="https://whatsapp.com/channel/0029VbCQ3NkCHDydnXDmiL3C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-sm py-2.5 px-5 w-full text-center block"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
