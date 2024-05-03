import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Education() {
  return (
    <Flex
      flexDir="column"
      gap="30px"
    >
      <Text
        lineHeight="45px"
        fontSize="28px"
        fontWeight={700}
      >
        Education
      </Text>
      <Flex
        flexDir="column"
        gap="20px"
      >
        <Text
          lineHeight="23px"
          fontSize="18px"
          fontWeight={700}
        >
          Bachelor of Science in Computer Science
        </Text>
        <Text
          lineHeight="23px"
          fontSize="18px"
          fontWeight={400}
        >
          Notre Dame University
        </Text>
        <Text
          lineHeight="23px"
          fontSize="18px"
          fontWeight={400}
        >
          June 2009 - march 2015
        </Text>
      </Flex>
    </Flex>
  );
}
