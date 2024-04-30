import { Box, Link, LinkProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import NextLink from "next/link";

type AnimatedLinkProps = LinkProps & {
  children: ReactNode;
  isActive?: boolean;
};

const MotionBox = motion(Box);

export default function AnimatedLink({ children, isActive = false, ...rest }: AnimatedLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const underlineAnimation = {
    visible: { width: "100%", x: 0 },
    hidden: { width: isActive ? "100%" : 0, x: 0 },
  };

  return (
    <Link
      as={NextLink}
      {...rest}
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      _hover={{ textDecoration: "none" }}
      w="fit-content"
    >
      {children}
      <Box
        position="relative"
        overflow="hidden"
        height="2px"
      >
        <MotionBox
          position="absolute"
          bottom="0"
          left="0"
          height="2px"
          backgroundColor="#1F1F1F"
          variants={underlineAnimation}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          transition={{ duration: 0.3 }}
        />
      </Box>
    </Link>
  );
}
