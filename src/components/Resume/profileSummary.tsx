import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function ProfileSummary() {
  return (
    <Flex
      flexDir="column"
      gap="40px"
      pl="356px"
    >
      <Text
        lineHeight="45px"
        fontSize="28px"
        fontWeight={700}
      >
        Profile
      </Text>
      <Text
        lineHeight="23px"
        fontSize="18px"
        fontWeight={400}
        pr="100px"
      >
        As a highly confident and skilled software engineer, I took charge of developing exceptional
        custom solutions, debugging, and enhancing the front-end experience. Additionally, I made an
        impactful contribution to the implementation of the back-end API to expedite the deployment
        of the project.
      </Text>
    </Flex>
  );
}
