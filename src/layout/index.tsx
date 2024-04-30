import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box
      minH="100vh"
      py="40px"
      position="relative"
    >
      <Header />
      <Box minHeight={"calc(100vh - 390px)"}>{children}</Box>
      <Footer />
    </Box>
  );
}
