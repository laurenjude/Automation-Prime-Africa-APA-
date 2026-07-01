import { Clock, Zap, ShieldCheck, TrendingUp } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';

const props = [
  {
    icon: Clock,
    title: '24/7 OPERATIONS',
    desc: 'Always working so you don\'t have to.',
  },
  {
    icon: Zap,
    title: 'INSTANT RESPONSE',
    desc: 'Leads and customers get answers in seconds.',
  },
  {
    icon: ShieldCheck,
    title: 'ZERO ERRORS',
    desc: 'Consistent processes. Reliable results.',
  },
  {
    icon: TrendingUp,
    title: 'SCALE WITHOUT HIRING',
    desc: 'Handle more, grow faster, stress less.',
  },
];

export default function ValuePropBar() {
  return (
    <section style={{ background: '#161B22', borderTop: '1px solid rgba(212,168,67,0.08)', borderBottom: '1px solid rgba(212,168,67,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {props.map(({ icon: Icon, title, desc }, i) => (
            <ScrollFadeIn key={title} delay={i * 100}>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(212,168,67,0.1)' }}>
                  <Icon size={22} className="text-gold" />
                </div>
                <p className="font-heading font-bold text-white text-xs tracking-widest">{title}</p>
                <p className="text-white-muted text-sm leading-relaxed">{desc}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
