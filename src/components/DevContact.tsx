import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import DevContainer from "./DevContainer";
import DevButton from "./DevButton";
import DevFadeInUp from "./DevFadeInUp";
import RightIcon from "./SVG/RightIcon";

export default function DevContact() {
  return (
    <DevContainer>
      <DevFadeInUp>
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
            <DevButton
              link="/contact-me"
              rightIcon={
                <Icon
                  as={RightIcon}
                  boxSize={5}
                  sx={{ transition: "color 0.2s" }}
                />
              }
            >
              Contact me
            </DevButton>
          </Flex>
        </Box>
      </DevFadeInUp>
    </DevContainer>
  );
}
