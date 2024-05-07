import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, ReactNode } from "react";

const MotionBox = motion(Box);

const DevFadeInUp = ({
  children,
  isStarted = false,
}: {
  children: ReactNode;
  isStarted?: boolean;
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [ref]);

  return (
    <MotionBox
      ref={ref}
      initial={isStarted ? { opacity: 5, y: 40 } : { opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2 }}
    >
      {children}
    </MotionBox>
  );
};

export default DevFadeInUp;
