import useCounter from "@/hooks/useCounter";
import { Flex, Progress, Text, VStack } from "@chakra-ui/react";
import React from "react";
import styles from "@/styles/resume.module.css";

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
    percentage: 45,
  },
  {
    name: "python",
    percentage: 45,
  },
  {
    name: "Figma",
    percentage: 45,
  },
  {
    name: "react.js / next.js",
    percentage: 45,
  },
  {
    name: "rest/postgresql",
    percentage: 45,
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
        <div className={styles.splitToTwo}>
          {skills.map((item, id) => (
            <ProgressBar
              key={id}
              name={item.name}
              percentage={item.percentage}
            />
          ))}
        </div>
      </Flex>
    </Flex>
  );
}
