import { Box, Flex, Text, Image } from "@chakra-ui/react";
import DevContainer from "../DevContainer";

export default function WorkContribution() {
  return (
    <DevContainer>
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        gap="30px"
        mb="120px"
      >
        <Text
          fontSize="35px"
          lineHeight="67px"
          fontWeight={700}
          textTransform="uppercase"
        >
          Work Contribution
        </Text>
        <Flex
          flex={1}
          flexDir={{ lg: "row", base: "column" }}
          justifyContent="center"
          alignItems="center"
          gap="70px"
        >
          <Box w="367px">
            <Text
              lineHeight="35px"
              w="291px"
              textTransform="uppercase"
            >
              <span style={{ color: "#0978DE", fontWeight: 600 }}>Yachtly</span> is Singapore first
              yacht rental platform perfect for a wide range of occasions and budgets.
            </Text>
          </Box>

          <Image
            src="/yachtly.svg"
            alt="juls dev"
          />
        </Flex>
        <Flex
          flex={1}
          flexDir={{ lg: "row", base: "column" }}
          justifyContent="center"
          alignItems="center"
          gap="70px"
        >
          <Image
            src="/kolibri.svg"
            alt="juls dev"
          />
          <Box w="367px">
            <Text
              lineHeight="35px"
              textTransform="uppercase"
            >
              <span style={{ color: "#0978DE", fontWeight: 600 }}>Kolibri</span> is an adaptable set
              of open solutions specially developed to support learning for the half of the world
              without Internet access.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </DevContainer>
  );
}
