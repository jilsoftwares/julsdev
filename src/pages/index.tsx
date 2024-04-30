import DevContact from "@/components/DevContact";
import DevContainer from "@/components/DevContainer";
import HeroSection from "@/components/Home/HeroSection";
import WorkContribution from "@/components/Home/WorkContribution";
import { Box } from "@chakra-ui/layout";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <WorkContribution />
      <DevContact />
    </Box>
  );
}
