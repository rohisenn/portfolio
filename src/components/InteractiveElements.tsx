import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const InteractiveElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={i}
      className="fixed pointer-events-none z-20"
      style={{
        left: Math.random() * window.innerWidth,
        top: Math.random() * window.innerHeight,
      }}
      animate={{
        x: mousePosition.x * (0.02 + i * 0.01),
        y: mousePosition.y * (0.02 + i * 0.01),
        rotate: [0, 360],
      }}
      transition={{
        x: { type: "spring", stiffness: 50, damping: 20 },
        y: { type: "spring", stiffness: 50, damping: 20 },
        rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
      }}
    >
      <div
        className={`w-${2 + i} h-${2 + i} ${
          i % 3 === 0 
            ? 'border border-neo-green/30 rotate-45' 
            : i % 3 === 1 
            ? 'bg-neo-cyan/20 rounded-full'
            : 'border border-neo-cyan/30'
        }`}
      />
    </motion.div>
  ));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {floatingElements}
      
      {/* Interactive corner elements */}
      <motion.div
        className="fixed top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-neo-green/50"
        animate={{
          borderColor: isHovering ? 'hsl(170 100% 50%)' : 'hsl(170 100% 50% / 0.5)',
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
      
      <motion.div
        className="fixed top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-neo-cyan/50"
        animate={{
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="fixed bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-neo-green/50"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="fixed bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-neo-cyan/50"
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Scanning lines effect */}
      <motion.div
        className="fixed top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neo-green to-transparent"
        animate={{
          y: [0, window.innerHeight],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-neo-cyan to-transparent"
        animate={{
          x: [0, window.innerWidth],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
      />
    </div>
  );
};

export default InteractiveElements;