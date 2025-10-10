import { useEffect, useRef } from 'react';

const SpaceClothGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const gridPoints = useRef<Array<Array<{x: number, y: number, targetX: number, targetY: number}>>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const gridSize = 50;
    const cols = Math.ceil(canvas.width / gridSize) + 1;
    const rows = Math.ceil(canvas.height / gridSize) + 1;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Initialize grid points
    for (let i = 0; i < cols; i++) {
      gridPoints.current[i] = [];
      for (let j = 0; j < rows; j++) {
        const x = i * gridSize;
        const y = j * gridSize;
        gridPoints.current[i][j] = { x, y, targetX: x, targetY: y };
      }
    }

    const animate = () => {
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.05;
      
      // Update grid points with fluid motion
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const point = gridPoints.current[i][j];
          const baseX = i * gridSize;
          const baseY = j * gridSize;
          
          const dx = mouseRef.current.x - baseX;
          const dy = mouseRef.current.y - baseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const maxDistance = 150;
          const influence = Math.max(0, 1 - distance / maxDistance);
          const smoothInfluence = influence * influence * (3 - 2 * influence);
          
          const offsetX = (dx / distance) * smoothInfluence * 50;
          const offsetY = (dy / distance) * smoothInfluence * 50;
          
          const targetX = baseX + (isNaN(offsetX) ? 0 : offsetX);
          const targetY = baseY + (isNaN(offsetY) ? 0 : offsetY);
          
          // Blend between deformed position and original position
          const restoreForce = 0.02;
          point.targetX = targetX * influence + baseX * (1 - influence);
          point.targetY = targetY * influence + baseY * (1 - influence);
          
          point.x += (point.targetX - point.x) * 0.12 + (baseX - point.x) * restoreForce;
          point.y += (point.targetY - point.y) * 0.12 + (baseY - point.y) * restoreForce;
        }
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw fluid grid
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const point = gridPoints.current[i][j];
          
          const dx = mouseRef.current.x - point.x;
          const dy = mouseRef.current.y - point.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - distance / 50);
          
          const baseOpacity = 0.20;
          const hoverOpacity = influence * 0.2;
          const opacity = baseOpacity + hoverOpacity;
          
          ctx.strokeStyle = `rgba(0, 255, 170, ${opacity})`;
          ctx.lineWidth = 1;
          
          if (i < cols - 1) {
            const nextPoint = gridPoints.current[i + 1][j];
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(nextPoint.x, nextPoint.y);
            ctx.stroke();
          }
          
          if (j < rows - 1) {
            const nextPoint = gridPoints.current[i][j + 1];
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(nextPoint.x, nextPoint.y);
            ctx.stroke();
          }
        }
      }
      
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
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default SpaceClothGrid;