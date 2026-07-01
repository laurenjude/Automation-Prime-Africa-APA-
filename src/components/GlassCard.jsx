export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <div className={`glass-card ${hover ? 'glass-card-hover' : ''} p-6 ${className}`}>
      {children}
    </div>
  );
}
