import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import DevFadeInUp from "../DevFadeInUp";

const LabelFormat = ({ title, name }: { title: string; name: string }) => {
  return (
    <Flex flexDir="column">
      <Text
        lineHeight="23px"
        fontSize="18px"
        fontWeight={700}
      >
        {title}
      </Text>
      <Text
        lineHeight="23px"
        fontSize="18px"
        fontWeight={400}
      >
        {name}
      </Text>
    </Flex>
  );
};

export default function PersonalInformation() {
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
        Personal Information
      </Text>
      <DevFadeInUp>
        <Flex
          flexDir="row"
          gap="80px"
        >
          <LabelFormat
            title="Phone Number"
            name="+63992 859 4377"
          />

          <LabelFormat
            title="Email"
            name="jilsoftwares@gmail.com"
          />
          <LabelFormat
            title="Location"
            name="Mindanao, Davao City, Philippines"
          />
        </Flex>
      </DevFadeInUp>
    </Flex>
  );
}
