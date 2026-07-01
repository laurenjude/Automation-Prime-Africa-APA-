import AnimatedCounter from './AnimatedCounter';
import ScrollFadeIn from './ScrollFadeIn';

const stats = [
  { value: '15', suffix: '+', label: 'Production Systems Built' },
  { value: '40', suffix: '+', label: 'Automation Nodes Deployed' },
  { value: '4', suffix: '', label: 'Industries Served' },
  { value: '24/7', suffix: '', label: 'System Availability' },
];

export default function StatsSection() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D1117 0%, #161B22 50%, #1B2A4A 100%)',
      }}
    >
      {/* Gold glow orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,168,67,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map(({ value, suffix, label }, i) => (
            <ScrollFadeIn key={label} delay={i * 120}>
              <div className="text-center">
                <p
                  className="font-heading font-black text-5xl md:text-6xl text-gradient-gold mb-3"
                >
                  <AnimatedCounter target={value} suffix={suffix} />
                </p>
                <p className="text-white-muted text-sm leading-relaxed">{label}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
