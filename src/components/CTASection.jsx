import { Link } from 'react-router-dom';
import ScrollFadeIn from './ScrollFadeIn';

export default function CTASection({
  title = 'Ready to Automate Your Business?',
  subtitle = 'Book a free 30-minute consultation. We will identify exactly where automation can save you time and money.',
  primaryLabel = 'Book a Consultation',
  primaryTo = '/contact',
  secondaryLabel = 'View Our Services',
  secondaryTo = '/services',
}) {
  return (
    <section className="py-20 md:py-28" style={{ background: '#0D1117' }}>
      <div className="max-w-3xl mx-auto px-6">
        <ScrollFadeIn>
          <div
            className="glass-card text-center p-10 md:p-16"
            style={{ border: '1px solid rgba(212,168,67,0.3)', boxShadow: '0 0 60px rgba(212,168,67,0.06)' }}
          >
            <h2 className="font-heading font-black text-2xl md:text-4xl text-white mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-white-muted text-base md:text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={primaryTo} className="btn-gold text-base">
                {primaryLabel}
              </Link>
              <Link to={secondaryTo} className="btn-gold-outline text-base">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
