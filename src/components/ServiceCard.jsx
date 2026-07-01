import { Link } from 'react-router-dom';
import GlassCard from './GlassCard';

export default function ServiceCard({ icon: Icon, title, description, stat, industries, delay = 0 }) {
  return (
    <GlassCard className="flex flex-col gap-4 h-full">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(212,168,67,0.1)' }}>
        <Icon size={24} className="text-gold" />
      </div>
      <div className="flex-1">
        <h3 className="font-heading font-bold text-white text-lg mb-2">{title}</h3>
        <p className="text-white-muted text-sm leading-relaxed mb-4">{description}</p>
        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-gold"
          style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.2)' }}>
          {stat}
        </div>
        <p className="text-white-dim text-xs mt-3">{industries}</p>
      </div>
      <Link to="/services" className="text-gold text-sm font-semibold hover:text-gold-light transition-colors mt-auto inline-flex items-center gap-1">
        Learn More <span>→</span>
      </Link>
    </GlassCard>
  );
}
