import { Box, Flex, Text } from "@chakra-ui/react";
import DevContainer from "./DevContainer";
import DevButton from "./DevButton";

export default function DevContact() {
  return (
    <DevContainer>
      <Box>
        <Flex
          flexDir="column"
          gap="20px"
          justify="center"
          align="center"
        >
          <Text
            fontSize="28px"
            lineHeight="-69px"
            textTransform="uppercase"
            fontWeight={800}
          >
            Do you require assistance with a project?
          </Text>
          <Box textAlign="center">
            <Text
              color={"#0978DE"}
              fontSize="35px"
              letterSpacing={"-3%"}
              textTransform="uppercase"
              fontWeight={900}
              pb="10px"
            >
              Join forces with me!
            </Text>
            <Text
              color={"#0978DE"}
              fontSize="35px"
              lineHeight="-69px"
              letterSpacing={"-3%"}
              textTransform="uppercase"
              fontWeight={900}
            >
              Together, we will achieve great things.
            </Text>
          </Box>
          <DevButton>Contact me</DevButton>
        </Flex>
      </Box>
    </DevContainer>
  );
}
