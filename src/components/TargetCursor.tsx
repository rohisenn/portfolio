import { useEffect, useRef, useCallback, useMemo } from 'react';

const TargetCursor = ({ targetSelector = '.cursor-target', spinDuration = 2, hideDefaultCursor = true }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cornersRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const spinTl = useRef(null);
  const dotRef = useRef(null);
  const constants = useMemo(
    () => ({
      borderWidth: 2,
      cornerSize: 8,
      parallaxStrength: 0.00005
    }),
    []
  );

  const moveCursor = useCallback((x, y) => {
    if (!cursorRef.current) return;
    const cursor = cursorRef.current;
    cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll('.target-cursor-corner');

    let activeTarget = null;
    let currentTargetMove = null;
    let currentLeaveHandler = null;
    let isAnimatingToTarget = false;
    let resumeTimeout = null;
    let animationId = null;

    const cleanupTarget = target => {
      if (currentTargetMove) {
        target.removeEventListener('mousemove', currentTargetMove);
      }
      if (currentLeaveHandler) {
        target.removeEventListener('mouseleave', currentLeaveHandler);
      }
      currentTargetMove = null;
      currentLeaveHandler = null;
    };

    cursor.style.transform = `translate(${window.innerWidth / 2}px, ${window.innerHeight / 2}px) translate(-50%, -50%)`;

    const startSpin = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      let rotation = 0;
      const spin = () => {
        rotation += 180 / (spinDuration * 60);
        cursor.style.transform = cursor.style.transform.replace(/rotate\([^)]*\)/, '') + ` rotate(${rotation}deg)`;
        animationId = requestAnimationFrame(spin);
      };
      spin();
    };

    startSpin();

    const moveHandler = e => moveCursor(e.clientX, e.clientY);
    window.addEventListener('mousemove', moveHandler);

    const enterHandler = e => {
      const target = e.target.closest(targetSelector);
      if (!target || !cursorRef.current || !cornersRef.current) return;

      if (activeTarget === target) return;

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }

      activeTarget = target;
      
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }

      cursor.style.transform = cursor.style.transform.replace(/rotate\([^)]*\)/, '');

      const updateCorners = (mouseX, mouseY) => {
        const rect = target.getBoundingClientRect();
        const cursorRect = cursorRef.current.getBoundingClientRect();

        const cursorCenterX = cursorRect.left + cursorRect.width / 2;
        const cursorCenterY = cursorRect.top + cursorRect.height / 2;

        const corners = Array.from(cornersRef.current!) as HTMLElement[];
        const { borderWidth, cornerSize } = constants;

        const offsets = [
          { x: rect.left - cursorCenterX - borderWidth, y: rect.top - cursorCenterY - borderWidth },
          { x: rect.right - cursorCenterX + borderWidth - cornerSize, y: rect.top - cursorCenterY - borderWidth },
          { x: rect.right - cursorCenterX + borderWidth - cornerSize, y: rect.bottom - cursorCenterY + borderWidth - cornerSize },
          { x: rect.left - cursorCenterX - borderWidth, y: rect.bottom - cursorCenterY + borderWidth - cornerSize }
        ];

        corners.forEach((corner, index) => {
          corner.style.transform = `translate(${offsets[index].x}px, ${offsets[index].y}px)`;
        });
      };

      isAnimatingToTarget = true;
      updateCorners(0, 0);

      setTimeout(() => {
        isAnimatingToTarget = false;
      }, 1);

      const targetMove = ev => {
        if (isAnimatingToTarget) return;
        updateCorners(ev.clientX, ev.clientY);
      };

      const leaveHandler = () => {
        activeTarget = null;
        isAnimatingToTarget = false;

        if (cornersRef.current) {
          const corners = Array.from(cornersRef.current) as HTMLElement[];
          const { cornerSize } = constants;
          const positions = [
            { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: cornerSize * 0.5 },
            { x: -cornerSize * 1.5, y: cornerSize * 0.5 }
          ];

          corners.forEach((corner, index) => {
            corner.style.transform = `translate(${positions[index].x}px, ${positions[index].y}px)`;
          });
        }

        resumeTimeout = setTimeout(() => {
          if (!activeTarget && cursorRef.current) {
            startSpin();
          }
          resumeTimeout = null;
        }, 50);

        cleanupTarget(target);
      };

      currentTargetMove = targetMove;
      currentLeaveHandler = leaveHandler;

      target.addEventListener('mousemove', targetMove);
      target.addEventListener('mouseleave', leaveHandler);
    };

    window.addEventListener('mouseover', enterHandler);

    return () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseover', enterHandler);

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      if (animationId) {
        cancelAnimationFrame(animationId);
      }

      document.body.style.cursor = originalCursor;
    };
  }, [targetSelector, spinDuration, moveCursor, constants, hideDefaultCursor]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-0 h-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{ willChange: 'transform' }}
    >
      <div
        ref={dotRef}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{ transform: 'translate(-50%, -50%)', willChange: 'transform' }}
      />
      <div
        className="target-cursor-corner absolute w-2 h-2 border-[2px] border-white border-r-0 border-b-0"
        style={{ transform: 'translate(-12px, -12px)', willChange: 'transform' }}
      />
      <div
        className="target-cursor-corner absolute w-2 h-2 border-[2px] border-white border-l-0 border-b-0"
        style={{ transform: 'translate(4px, -12px)', willChange: 'transform' }}
      />
      <div
        className="target-cursor-corner absolute w-2 h-2 border-[2px] border-white border-l-0 border-t-0"
        style={{ transform: 'translate(4px, 4px)', willChange: 'transform' }}
      />
      <div
        className="target-cursor-corner absolute w-2 h-2 border-[2px] border-white border-r-0 border-t-0"
        style={{ transform: 'translate(-12px, 4px)', willChange: 'transform' }}
      />
    </div>
  );
};

export default TargetCursor;