import { Box, Flex, Text, Image } from "@chakra-ui/react";
import DevContainer from "../DevContainer";

export default function HeroSection() {
  return (
    <Box>
      <DevContainer>
        <Flex
          h={{ lg: "358px", base: "auto" }}
          flexDir={{ lg: "row", base: "column" }}
          alignItems="center"
          justify={"center"}
          p="20px"
          my="20px"
          gap="20px"
        >
          <Text
            fontSize={{ lg: "79px", base: "65px" }}
            fontWeight={700}
            lineHeight={"69px"}
            textTransform="uppercase"
            w={{ lg: "434px", base: "auto" }}
          >
            CREATIVE & <span style={{ color: "#0978DE" }}>FLAWLESS </span>FRONTEND DEV
          </Text>
          <Image
            src="/heroImage.jpg"
            alt="juls dev"
          />
        </Flex>
      </DevContainer>
    </Box>
  );
}
