import { User } from 'lucide-react';

export default function TeamCard({ name, role, description }) {
  return (
    <div className="glass-card flex flex-col items-center text-center p-6 gap-4 min-w-[220px]">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ border: '2px solid #D4A843', background: 'rgba(212,168,67,0.08)' }}
      >
        <User size={36} className="text-gold" />
      </div>
      <div>
        <h4 className="font-heading font-bold text-white text-base mb-0.5">{name}</h4>
        <p className="text-gold text-xs font-semibold tracking-wide mb-2">{role}</p>
        <p className="text-white-muted text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
