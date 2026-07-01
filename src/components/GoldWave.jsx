import { useEffect, useRef } from 'react';

/* Three thin sine-wave threads + rising gold particle sparks */
export default function GoldWave() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = 0, height = 0, dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const mobile = () => window.innerWidth < 768;

    /* ── Wave definitions ── */
    const waves = [
      // main   — thin bright thread
      { amp: 22, freq: 0.009, speed: 0.016, phase: 0,   yOff: 0,   color: 'rgba(212,168,67,0.70)', lw: 1.5, blur: 8,  shadowC: 'rgba(212,168,67,0.40)' },
      // second — offset down 15px
      { amp: 18, freq: 0.012, speed: 0.011, phase: 2.4, yOff: 15,  color: 'rgba(212,168,67,0.40)', lw: 1.0, blur: 6,  shadowC: 'rgba(212,168,67,0.25)' },
      // third  — offset up 10px, desktop only
      { amp: 14, freq: 0.007, speed: 0.020, phase: 4.8, yOff: -10, color: 'rgba(212,168,67,0.25)', lw: 0.8, blur: 4,  shadowC: 'rgba(212,168,67,0.15)' },
    ];

    /* ── Particle pool ── */
    const MAX_PARTICLES = 20;
    const particles = [];

    const spawnParticle = () => {
      const x = Math.random() * width;
      // Pick a wave to spawn from
      const w = waves[Math.floor(Math.random() * waves.length)];
      const t0 = performance.now() / 1000;
      const baseY = height * 0.52 + w.yOff + Math.sin(x * w.freq + t0 * w.speed + w.phase) * w.amp;
      particles.push({
        x,
        y: baseY,
        vy: -(0.28 + Math.random() * 0.45),   // slow upward drift
        vx: (Math.random() - 0.5) * 0.18,
        opacity: 0.2 + Math.random() * 0.35,
        fade: 0.004 + Math.random() * 0.004,
        r: 1.2 + Math.random() * 1.4,
      });
    };

    // Pre-fill half the pool
    for (let i = 0; i < MAX_PARTICLES / 2; i++) spawnParticle();

    let frameCount = 0;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const isMobile = mobile();
      const waveList = isMobile ? waves.slice(0, 2) : waves;
      const midY = height * 0.52;

      /* ── Waves ── */
      waveList.forEach((w) => {
        ctx.save();
        ctx.beginPath();
        const step = isMobile ? 2 : 1;
        for (let x = 0; x <= width; x += step) {
          const y = midY + w.yOff + Math.sin(x * w.freq + t * w.speed + w.phase) * w.amp;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = w.color;
        ctx.lineWidth = w.lw;
        ctx.shadowBlur = w.blur;
        ctx.shadowColor = w.shadowC;
        ctx.globalCompositeOperation = 'lighter';
        ctx.stroke();
        ctx.restore();
      });

      /* ── Particles ── */
      const maxP = isMobile ? 10 : MAX_PARTICLES;
      // Spawn ~1 particle every 4 frames
      if (frameCount % 4 === 0 && particles.length < maxP) spawnParticle();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.opacity -= p.fade;
        if (p.opacity <= 0) { particles.splice(i, 1); continue; }

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.globalCompositeOperation = 'lighter';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = '#D4A843';
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(212,168,67,0.6)';
        ctx.fill();
        ctx.restore();
      }

      /* ── Vertical fade overlay — dark at top so content above isn't lit ── */
      const vertFade = ctx.createLinearGradient(0, 0, 0, height);
      vertFade.addColorStop(0,    'rgba(13,17,23,1)');
      vertFade.addColorStop(0.25, 'rgba(13,17,23,0.35)');
      vertFade.addColorStop(1,    'rgba(13,17,23,0)');
      ctx.fillStyle = vertFade;
      ctx.fillRect(0, 0, width, height);

      /* ── Edge horizontal fade ── */
      const edgeFade = ctx.createLinearGradient(0, 0, width, 0);
      edgeFade.addColorStop(0,    'rgba(13,17,23,0.9)');
      edgeFade.addColorStop(0.08, 'rgba(13,17,23,0)');
      edgeFade.addColorStop(0.92, 'rgba(13,17,23,0)');
      edgeFade.addColorStop(1,    'rgba(13,17,23,0.9)');
      ctx.fillStyle = edgeFade;
      ctx.fillRect(0, 0, width, height);

      t += 1;
      frameCount += 1;
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '150px',
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}
