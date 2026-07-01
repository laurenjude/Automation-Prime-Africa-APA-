import ScrollFadeIn from './ScrollFadeIn';

const steps = [
  {
    num: '1',
    title: 'Discovery',
    desc: 'We understand your business and identify where automation delivers the most value.',
  },
  {
    num: '2',
    title: 'Design',
    desc: 'We architect the solution. You approve before we build.',
  },
  {
    num: '3',
    title: 'Build',
    desc: 'We develop the complete system with progress updates throughout.',
  },
  {
    num: '4',
    title: 'Test',
    desc: 'Every workflow tested end-to-end with real data before handover.',
  },
  {
    num: '5',
    title: 'Launch',
    desc: 'Deployed, documented, and supported. Your team is trained and ready.',
  },
];

export default function HowWeWork() {
  return (
    <section style={{ background: '#1C2333' }} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-3">
              How We <span className="text-gradient-gold">Work</span>
            </h2>
            <div className="gold-line" />
            <p className="text-white-muted mt-5 text-base max-w-xl mx-auto">
              From first conversation to live system in weeks
            </p>
          </div>
        </ScrollFadeIn>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* connecting line */}
          <div className="absolute top-6 left-0 right-0 h-px mx-16"
            style={{ background: 'linear-gradient(90deg, #D4A843, #E8C36A, #D4A843)' }} />

          {steps.map(({ num, title, desc }, i) => (
            <ScrollFadeIn key={num} delay={i * 120} className="flex-1 flex flex-col items-center text-center px-4 relative z-10">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-black text-dark-primary text-lg mb-4 flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #D4A843, #E8C36A)', boxShadow: '0 0 16px rgba(212,168,67,0.35)' }}
              >
                {num}
              </div>
              <h4 className="font-heading font-bold text-white mb-2 text-base">{title}</h4>
              <p className="text-white-muted text-xs leading-relaxed">{desc}</p>
            </ScrollFadeIn>
          ))}
        </div>

        {/* Mobile: vertical stepper */}
        <div className="md:hidden flex flex-col gap-0">
          {steps.map(({ num, title, desc }, i) => (
            <ScrollFadeIn key={num} delay={i * 100}>
              <div className="flex gap-5 pb-8 relative">
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px"
                    style={{ background: 'rgba(212,168,67,0.3)' }} />
                )}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-black text-dark-primary text-base flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #D4A843, #E8C36A)' }}
                >
                  {num}
                </div>
                <div className="pt-2">
                  <h4 className="font-heading font-bold text-white mb-1.5 text-base">{title}</h4>
                  <p className="text-white-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
