import { useEffect, useRef } from 'react';

const ScrambledText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:!@#$%^&*(){}[]<>?/~`',
  className = '',
  style = {},
  children
}) => {
  const rootRef = useRef(null);
  const charsRef = useRef([]);

  useEffect(() => {
    if (!rootRef.current) return;

    const textElement = rootRef.current.querySelector('p');
    if (!textElement) return;

    // Split text into characters
    const text = textElement.textContent;
    const chars = text.split('');
    
    // Clear original text and create spans for each character
    textElement.innerHTML = '';
    charsRef.current = chars.map(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.dataset.content = char;
      // Preserve space width
      if (char === ' ') {
        span.style.width = '0.25em';
        span.innerHTML = '&nbsp;';
      }
      textElement.appendChild(span);
      return span;
    });

    const handleMove = e => {
      charsRef.current.forEach(c => {
        const rect = c.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius && c.dataset.content !== ' ') {
          const originalChar = c.dataset.content;
          let iterations = 0;
          const maxIterations = Math.floor(duration * 10 * (1 - dist / radius));
          
          const scrambleInterval = setInterval(() => {
            if (iterations < maxIterations) {
              const randomChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
              c.textContent = randomChar;
              c.style.color = '#00ffff'; // Neo-cyan for scrambled
              iterations++;
            } else {
              c.textContent = originalChar;
              c.style.color = ''; // Reset to original color
              clearInterval(scrambleInterval);
            }
          }, speed * 100);
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener('mousemove', handleMove);

    return () => {
      el.removeEventListener('mousemove', handleMove);
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div
      ref={rootRef}
      className={`scrambled-text ${className}`}
      style={style}
    >
        <p
          className={className ? `${className} scrambled-text` : 'scrambled-text'}
          style={style}
        >
          {children}
        </p>
    </div>
  );
};

export default ScrambledText;