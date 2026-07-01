import { useId } from 'react';

/* ── Sub-components ──────────────────────────────────────────────────── */

function GoldRule() {
  return (
    <div style={{
      width: '100%',
      height: '1px',
      background: 'linear-gradient(90deg, transparent 0%, rgba(212,168,67,0.65) 25%, rgba(212,168,67,0.65) 75%, transparent 100%)',
    }} />
  );
}

function CrescentArc({ gradId, strokeW = 4.5, small = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 75 85"
      fill="none"
      style={{
        position: 'absolute',
        top: small ? '-0.16em' : '-0.14em',
        right: small ? '-0.25em' : '-0.22em',
        width: '0.74em',
        height: '0.84em',
        pointerEvents: 'none',
        overflow: 'visible',
      }}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#B8922F" stopOpacity="0.4" />
          <stop offset="55%"  stopColor="#D4A843" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#EDD068" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* Primary crescent arc */}
      <path
        d="M 10 80 C 18 50 36 12 70 5"
        stroke={`url(#${gradId})`}
        strokeWidth={strokeW}
        strokeLinecap="round"
      />
      {/* Thin depth arc */}
      <path
        d="M 18 82 C 26 54 44 18 76 12"
        stroke="#D4A843"
        strokeWidth={strokeW * 0.27}
        strokeLinecap="round"
        strokeOpacity="0.28"
      />
    </svg>
  );
}

/* ── Main component ──────────────────────────────────────────────────── */

export default function APALogo({ size = 'large' }) {
  const uid = useId();
  // useId can produce colons — strip to valid CSS id chars
  const gradId = `ga${uid.replace(/[^a-z0-9]/gi, '')}`;
  const isSmall = size === 'small';

  /* ── Navbar / small variant ── */
  if (isSmall) {
    return (
      <div style={{
        display: 'inline-block',
        position: 'relative',
        fontSize: '28px',
        lineHeight: 1,
      }}>
        <span style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 900,
          fontSize: '1em',
          letterSpacing: '0.14em',
          lineHeight: 1.05,
          background: 'linear-gradient(to bottom, #C2D8EF 0%, #7AA8D4 30%, #3B68A8 60%, #1B2A4A 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 1px 6px rgba(212,168,67,0.28))',
          display: 'block',
          userSelect: 'none',
        }}>
          APA
        </span>
        <CrescentArc gradId={gradId} strokeW={3} small />
      </div>
    );
  }

  /* ── Hero / large variant ── */
  return (
    <div style={{
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'clamp(5px, 1.2vw, 10px)',
      maxWidth: '100%',
    }}>
      {/* APA letters + arc — font-size on the wrapper so em-based arc scales with it */}
      <div style={{
        position: 'relative',
        display: 'inline-block',
        fontSize: 'clamp(48px, 12vw, 72px)',
      }}>
        <span style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 900,
          fontSize: '1em',
          letterSpacing: 'clamp(0.08em, 1.2vw, 0.11em)',
          lineHeight: 1.05,
          background: 'linear-gradient(to bottom, #C2D8EF 0%, #7AA8D4 28%, #3B68A8 58%, #1B2A4A 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 2px 12px rgba(212,168,67,0.3))',
          display: 'block',
          userSelect: 'none',
        }}>
          APA
        </span>
        <CrescentArc gradId={gradId} strokeW={4.5} />
      </div>

      {/* Gold rule + AUTOMATION PRIME AFRICA + gold rule */}
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'clamp(4px, 0.8vw, 7px)',
      }}>
        <GoldRule />
        <div style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 600,
          fontSize: 'clamp(10px, 2.6vw, 22px)',
          letterSpacing: 'clamp(1.5px, 0.4vw, 4px)',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(4px, 1vw, 9px)',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}>
          <span style={{ color: '#FFFFFF' }}>AUTOMATION</span>
          <span style={{ color: '#D4A843' }}>PRIME</span>
          <span style={{ color: '#FFFFFF' }}>AFRICA</span>
        </div>
        <GoldRule />
      </div>

      {/* Tagline */}
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 500,
        fontSize: 'clamp(9px, 1.8vw, 15px)',
        letterSpacing: 'clamp(1px, 0.35vw, 3px)',
        color: '#D4A843',
        margin: 0,
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}>
        AUTOMATE&nbsp;•&nbsp;INNOVATE&nbsp;•&nbsp;ELEVATE
      </p>
    </div>
  );
}
