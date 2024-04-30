import DevContact from "@/components/DevContact";
import DevContainer from "@/components/DevContainer";
import { Box } from "@chakra-ui/layout";

export default function Home() {
  return (
    <Box>
      <DevContainer>{"jul's dev"}</DevContainer>
      <DevContact />
    </Box>
  );
}
