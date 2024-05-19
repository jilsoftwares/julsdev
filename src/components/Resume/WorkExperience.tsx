import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import DevFadeInUp from "../DevFadeInUp";

const data = [
  {
    companyName: "Yachtly | WaterSpot LLP",
    address: "Jalan Kelichap, Singapore",
    role: "Software Engineer",
    year: "May 2022 – Nov 2023",
    description:
      "As a highly confident and skilled software engineer, I took charge of developing exceptional custom solutions, debugging, and enhancing the front-end experience. Additionally, I made an impactful contribution to the implementation of the back-end API to expedite the deployment of the project.",
  },
  {
    companyName: "MrPau Softwares",
    address: "Matina Crossing, Davao City",
    role: "Programmer / System Ad",
    year: "APRIL 2018 - SEPTEMBER 2020",
    description:
      "As a highly confident and skilled software engineer, I took charge of developing exceptional custom solutions, debugging, and enhancing the front-end experience. Additionally, I made an impactful contribution to the implementation of the back-end API to expedite the deployment of the project.",
  },
  {
    companyName: "Notre Dame University | ICT",
    address: "De Mazenod Avenue, Cotabato City",
    role: "Junior Programmer",
    year: "JUNE 2015 - MARCH 2018",
    description:
      "As a highly confident and skilled software engineer, I took charge of developing exceptional custom solutions, debugging, and enhancing the front-end experience. Additionally, I made an impactful contribution to the implementation of the back-end API to expedite the deployment of the project.",
  },
];

type workExperienceProps = {
  companyName: string;
  address: string;
  role: string;
  year: string;
  description: string;
};

export default function WorkExperience() {
  return (
    <Flex
      flexDir="column"
      gap="40px"
    >
      <Text
        lineHeight="45px"
        fontSize="28px"
        fontWeight={700}
      >
        Work Experience
      </Text>

      <Flex
        flexDir="column"
        gap="40px"
      >
        {data.map(({ companyName, address, role, year, description }: workExperienceProps, id) => (
          <DevFadeInUp key={id}>
            <Flex>
              <Box
                minH="full"
                w="10px"
                backgroundColor="black"
                mr="10px"
              />
              <Flex
                gap="32px"
                flexDir="column"
              >
                <Flex
                  flex={1}
                  flexDir={"row"}
                  justify="space-between"
                >
                  <Flex flexDir="column">
                    <Text fontWeight={700}>{role}</Text>
                    <Text>{year}</Text>
                  </Flex>
                  <Flex flexDir="column">
                    <Text fontWeight={700}>{companyName}</Text>
                    <Text>{address}</Text>
                  </Flex>
                </Flex>
                <Text>{description}</Text>
              </Flex>
            </Flex>
          </DevFadeInUp>
        ))}
      </Flex>
    </Flex>
  );
}
