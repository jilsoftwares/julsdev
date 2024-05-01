import { useState, useEffect, useRef } from 'react';

export default function useCounter(end: number, duration: number = 1000) {
  const start = 1;
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && !triggered) {
          setTriggered(true); // prevent repeat animation when refocused
          let currentCount = start;
          const increment = end > start ? 1 : -1;
          const stepTime = Math.abs(Math.floor(duration / (end - start)));

          const timer = setInterval(() => {
            currentCount += increment;
            setCount((prevCount) => {
              if (
                (increment > 0 && prevCount >= end) ||
                (increment < 0 && prevCount <= end)
              ) {
                clearInterval(timer);
                return end;
              }
              return prevCount + increment;
            });
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [start, end, duration, triggered]);

  return { count, ref };
}
