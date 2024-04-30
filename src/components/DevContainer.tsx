import { Box, BoxProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type ContainerProps = BoxProps & {
  children: ReactNode;
};

export default function DevContainer({ children }: ContainerProps) {
  return (
    <Box
      maxW="1200px"
      px={{ base: "20px", lg: "40px" }}
      mx="auto"
    >
      {children}
    </Box>
  );
}
