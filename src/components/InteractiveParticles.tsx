import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  type: 'circle' | 'square';
  opacity: number;
  baseOpacity: number;
}

const InteractiveParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 4 + 2,
          type: Math.random() > 0.5 ? 'circle' : 'square',
          opacity: 0.3,
          baseOpacity: 0.3
        });
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 0.02;
          particle.vx -= (dx / distance) * force;
          particle.vy -= (dy / distance) * force;
          particle.opacity = particle.baseOpacity + (1 - distance / maxDistance) * 0.5;
        } else {
          particle.opacity += (particle.baseOpacity - particle.opacity) * 0.02;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Boundaries
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.5;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.5;
        
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        if (particle.type === 'circle') {
          ctx.strokeStyle = 'rgba(0, 255, 170, 1)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          ctx.strokeStyle = 'rgba(0, 255, 255, 1)';
          ctx.lineWidth = 1;
          ctx.strokeRect(
            particle.x - particle.size,
            particle.y - particle.size,
            particle.size * 2,
            particle.size * 2
          );
        }
        
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-5"
      style={{ background: 'transparent' }}
    />
  );
};

export default InteractiveParticles;