import { useNavigate } from 'react-router-dom';

const carouselCSS = `
@keyframes carouselScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.sc-wrap {
  overflow: hidden;
  position: relative;
}
.sc-track {
  display: flex;
  width: max-content;
  animation: carouselScroll 28s linear infinite;
  will-change: transform;
  padding: 20px 0 28px;
}
.sc-wrap:hover .sc-track {
  animation-play-state: paused;
}
.sc-card {
  flex-shrink: 0;
  width: 320px;
  margin-right: 24px;
  cursor: pointer;
}
.sc-inner {
  height: 100%;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(212,168,67,0.15);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  box-sizing: border-box;
}
.sc-card:hover .sc-inner {
  border-color: rgba(212,168,67,0.50);
  box-shadow: 0 0 28px rgba(212,168,67,0.18);
  transform: scale(1.03);
}
@media (max-width: 767px) {
  .sc-wrap {
    overflow-x: auto;
    overflow-y: visible;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 0 16px;
    box-sizing: border-box;
  }
  .sc-track {
    animation: none !important;
    padding: 16px 0 24px;
  }
  .sc-card {
    width: 280px;
    scroll-snap-align: start;
  }
  .sc-dup { display: none; }
}
`;

export default function ServiceCarousel({ services }) {
  const navigate = useNavigate();

  const handleCardClick = () => navigate('/services');

  const doubled = [...services, ...services];

  return (
    <>
      <style>{carouselCSS}</style>

      <div className="sc-wrap">
        {/* Left edge fade */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', top: 0, bottom: 0, left: 0, width: 80, zIndex: 2,
            background: 'linear-gradient(to right, #0D1117 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
        {/* Right edge fade */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', top: 0, bottom: 0, right: 0, width: 80, zIndex: 2,
            background: 'linear-gradient(to left, #0D1117 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        <div className="sc-track">
          {doubled.map((svc, i) => {
            const isDup = i >= services.length;
            return (
              <div
                key={`${svc.title}-${i}`}
                className={`sc-card${isDup ? ' sc-dup' : ''}`}
                onClick={handleCardClick}
                role="button"
                tabIndex={isDup ? -1 : 0}
                aria-label={`${svc.title} — view all services`}
                onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
              >
                <CarouselCard {...svc} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function CarouselCard({ icon: Icon, title, description, stat, industries }) {
  return (
    <div className="sc-inner">
      {/* Icon */}
      <div style={{
        width: 48, height: 48, borderRadius: 12, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(212,168,67,0.10)',
      }}>
        <Icon size={24} color="#D4A843" />
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <h3 style={{
          fontFamily: '"Poppins", sans-serif', fontWeight: 700,
          fontSize: '1.05rem', color: '#FFFFFF', margin: 0,
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: '"Inter", sans-serif', fontSize: '0.85rem',
          color: '#A0A0A0', lineHeight: 1.65, margin: 0,
        }}>
          {description}
        </p>
        <span style={{
          display: 'inline-block', alignSelf: 'flex-start',
          padding: '3px 12px', borderRadius: 9999, fontSize: '0.72rem',
          fontWeight: 700, color: '#D4A843',
          background: 'rgba(212,168,67,0.08)',
          border: '1px solid rgba(212,168,67,0.2)',
        }}>
          {stat}
        </span>
        <p style={{ fontSize: '0.75rem', color: '#6B7280', margin: 0 }}>{industries}</p>
      </div>

      {/* CTA hint */}
      <span style={{ color: '#D4A843', fontSize: '0.875rem', fontWeight: 600, marginTop: 'auto' }}>
        View Details →
      </span>
    </div>
  );
}
