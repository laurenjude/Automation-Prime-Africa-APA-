import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const socialLinks = [
  {
    icon: Facebook,
    href: 'https://www.facebook.com/profile.php?id=100084303461224',
    label: 'Facebook',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/automationprimeafrica',
    label: 'Instagram',
  },
  {
    icon: WhatsAppIcon,
    href: 'https://whatsapp.com/channel/0029VbCQ3NkCHDydnXDmiL3C',
    label: 'WhatsApp',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/automationprimeafrica/',
    label: 'LinkedIn',
  },
];

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  const location = useLocation();

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ background: '#161B22', borderTop: '1px solid rgba(212,168,67,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Automation Prime Africa"
                style={{ height: '80px', width: 'auto', display: 'block' }}
              />
            </Link>
            <p className="text-white-muted text-sm mt-1 leading-relaxed">
              Your Operations, Automated
            </p>
            <p className="text-white-dim text-xs mt-3 leading-relaxed">
              Based in Lagos, Nigeria. Serving businesses across Africa and internationally.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="text-white-muted hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-widest">Connect</h4>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:info@automationprimeafrica.com"
                className="flex items-center gap-2 text-white-muted hover:text-gold transition-colors text-sm"
              >
                <Mail size={15} className="text-gold flex-shrink-0" />
                info@automationprimeafrica.com
              </a>
              <a
                href="mailto:support@automationprimeafrica.com"
                className="flex items-center gap-2 text-white-muted hover:text-gold transition-colors text-sm"
              >
                <Mail size={15} className="text-gold flex-shrink-0" />
                support@automationprimeafrica.com
              </a>
            </div>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white-muted hover:text-gold transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-white-dim text-xs text-center">
            © 2026 Automation Prime Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
