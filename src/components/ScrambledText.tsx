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

    const container = rootRef.current as HTMLElement;
    const textElement = (container.querySelector('p') as HTMLElement) || container;
    if (!textElement) return;

    // Prepare text and splitting strategy
    const text = textElement.textContent || '';
    const isLongText = text.trim().length > 60;

    // Clear original text and create spans
    textElement.innerHTML = '';

    const tokens = isLongText ? text.split(/(\s+)/) : text.split('');

    const spans = tokens
      .map(token => {
        // Preserve whitespace tokens as text nodes for natural wrapping
        if (isLongText && /^\s+$/.test(token)) {
          textElement.appendChild(document.createTextNode(token));
          return null;
        }

        const span = document.createElement('span');
        span.textContent = token;
        // Use inline (not inline-block) to avoid per-letter wrapping issues
        // span.style.display = 'inline'; // default
        span.dataset.content = token; // original content for compatibility
        span.dataset.original = token;
        textElement.appendChild(span);
        return span;
      })
      .filter(Boolean) as HTMLSpanElement[];

    charsRef.current = spans;

    const handleMove = e => {
      charsRef.current.forEach(c => {
        const rect = c.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.hypot(dx, dy);

        const originalContent = c.dataset.original || '';

        if (dist < radius && originalContent.trim() !== '') {
          const maxIterations = Math.floor(duration * 10 * (1 - dist / radius));
          let iterations = 0;

          const scrambleInterval = setInterval(() => {
            if (iterations < maxIterations) {
              // Build a scrambled string of equal length
              const scrambled = Array.from({ length: originalContent.length })
                .map(() => scrambleChars[Math.floor(Math.random() * scrambleChars.length)])
                .join('');
              c.textContent = scrambled;
              c.style.color = '#00ffff'; // Neo-cyan for scrambled
              iterations++;
            } else {
              c.textContent = originalContent;
              c.style.color = '';
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
      {children}
    </div>
  );
};

export default ScrambledText;