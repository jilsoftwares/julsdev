import useCounter from "@/hooks/useCounter";
import { Flex, Progress, Text, VStack } from "@chakra-ui/react";
import React from "react";
import styles from "@/styles/resume.module.css";
import DevFadeInUp from "../DevFadeInUp";

const skills = [
  {
    name: "html",
    percentage: 100,
  },
  {
    name: "css",
    percentage: 100,
  },
  {
    name: "javascript",
    percentage: 75,
  },
  {
    name: "typescript",
    percentage: 72,
  },
  {
    name: "python",
    percentage: 45,
  },
  {
    name: "Figma",
    percentage: 55,
  },
  {
    name: "react native",
    percentage: 70,
  },
  {
    name: "react.js / next.js",
    percentage: 80,
  },
  {
    name: "tailwind css",
    percentage: 65,
  },
  {
    name: "node.js",
    percentage: 68,
  },
  {
    name: "rest/postgresql",
    percentage: 60,
  },
  {
    name: "wordpress",
    percentage: 45,
  },
];

const ProgressBar = ({ name, percentage }: { name: string; percentage: number }) => {
  const { count, ref } = useCounter(percentage, 2000);
  return (
    <VStack
      ref={ref}
      alignItems="start"
      spacing={0}
    >
      <Flex
        flexDir="column"
        gap={5}
        mb={5}
        width={{ base: 150, md: 236 }}
      >
        <Text
          fontWeight="semibold"
          textTransform="uppercase"
        >
          {name}
        </Text>
        <Progress
          rounded={3}
          h="13px"
          size="sm"
          value={count}
        />
      </Flex>
    </VStack>
  );
};

export default function Skills() {
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
        Skills
      </Text>
      <Flex
        flexDir="column"
        gap="20px"
      >
        <DevFadeInUp>
          <div className={styles.splitToTwo}>
            {skills.map((item, id) => (
              <ProgressBar
                key={id}
                name={item.name}
                percentage={item.percentage}
              />
            ))}
          </div>
        </DevFadeInUp>
      </Flex>
    </Flex>
  );
}
