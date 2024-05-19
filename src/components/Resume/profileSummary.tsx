import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import DevFadeInUp from "../DevFadeInUp";

export default function ProfileSummary() {
  return (
    <Flex
      flexDir="column"
      gap="30px"
      px="20px"
      pt="40px"
    >
      <Text
        lineHeight="45px"
        fontSize="28px"
        fontWeight={700}
      >
        Profile
      </Text>
      <DevFadeInUp>
        <Text>
          I understand how crucial it is to have engaging technology and seamless applications that
          capture people's attention. I empathize with the challenges faced by IT professionals as
          they seek to take risks and explore better solutions. I am skilled at delving into
          intricate problems and utilizing new technology to achieve the best outcomes.
        </Text>
        <br />
        <Text>
          I consistently bring a positive and friendly approach to my work, along with a great deal
          of motivation, loyalty, and humor. My goal is to excel in every project. I am always
          seeking personal and professional growth and hope to make a meaningful impact on the tech
          world.
        </Text>
      </DevFadeInUp>
    </Flex>
  );
}
