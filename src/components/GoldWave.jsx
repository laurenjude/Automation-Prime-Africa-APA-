import { useEffect, useRef } from 'react';

export default function GoldWave() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const isMobile = () => window.innerWidth < 768;

    let t = 0;

    const waves = [
      // main wave
      { amp: 28, freq: 0.008, speed: 0.018, phase: 0,    color: 'rgba(212,168,67,0.65)', width: 2.5, blur: 14 },
      // secondary — offset phase and slightly different freq
      { amp: 18, freq: 0.011, speed: 0.013, phase: 2.1,  color: 'rgba(212,168,67,0.35)', width: 1.8, blur: 8  },
      // tertiary — only on desktop
      { amp: 12, freq: 0.006, speed: 0.022, phase: 4.3,  color: 'rgba(232,195,106,0.22)', width: 1.2, blur: 6  },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const mobile = isMobile();
      const waveList = mobile ? waves.slice(0, 2) : waves;
      const midY = height * 0.52;

      // Horizontal fade mask — brighter in centre, fading at edges
      const edgeFade = ctx.createLinearGradient(0, 0, width, 0);
      edgeFade.addColorStop(0,    'rgba(0,0,0,0)');
      edgeFade.addColorStop(0.12, 'rgba(0,0,0,1)');
      edgeFade.addColorStop(0.88, 'rgba(0,0,0,1)');
      edgeFade.addColorStop(1,    'rgba(0,0,0,0)');

      waveList.forEach((w) => {
        ctx.save();
        ctx.beginPath();

        for (let x = 0; x <= width; x += 1) {
          const y = midY + Math.sin(x * w.freq + t * w.speed + w.phase) * w.amp;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.strokeStyle = w.color;
        ctx.lineWidth = w.width;
        ctx.shadowBlur = w.blur;
        ctx.shadowColor = 'rgba(212,168,67,0.55)';
        ctx.globalCompositeOperation = 'lighter';

        // Clip to a rect to let the horizontal fade mask apply via globalAlpha per-segment
        ctx.stroke();
        ctx.restore();
      });

      // Top-to-bottom vertical gradient overlay — dark at top, transparent at bottom
      // so the wave "fades up" into the hero content
      const vertFade = ctx.createLinearGradient(0, 0, 0, height);
      vertFade.addColorStop(0,   'rgba(13,17,23,1)');
      vertFade.addColorStop(0.3, 'rgba(13,17,23,0.3)');
      vertFade.addColorStop(1,   'rgba(13,17,23,0)');
      ctx.fillStyle = vertFade;
      ctx.fillRect(0, 0, width, height);

      t += 1;
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
        height: '200px',
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}
