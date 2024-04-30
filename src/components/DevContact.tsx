import { Box, Flex, Text } from "@chakra-ui/react";
import DevContainer from "./DevContainer";
import DevButton from "./DevButton";

export default function DevContact() {
  return (
    <DevContainer>
      <Box h="276px">
        <Flex
          flexDir="column"
          gap="40px"
          justify="center"
          align="center"
          py="20px"
        >
          <Text
            fontSize={{ lg: "30px", base: "20px" }}
            lineHeight="-69px"
            textTransform="uppercase"
            fontWeight={800}
          >
            Do you require assistance with a project?
          </Text>
          <Box textAlign="center">
            <Text
              color={"#0978DE"}
              fontSize={{ lg: "35px", base: "24px" }}
              lineHeight="-69px"
              letterSpacing={"-3%"}
              textTransform="uppercase"
              fontWeight={900}
            >
              Join forces with me! Together, we will achieve great things.
            </Text>
          </Box>
          <DevButton>Contact me</DevButton>
        </Flex>
      </Box>
    </DevContainer>
  );
}
