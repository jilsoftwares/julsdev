import useCounter from "@/hooks/useCounter";
import { Flex, Progress, Text, VStack } from "@chakra-ui/react";
import React from "react";

const languages = [
  {
    name: "Tagalog",
    percentage: 100,
  },
  {
    name: "English",
    percentage: 65,
  },
  {
    name: "Bisaya",
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
        <Text fontWeight="semibold">{name}</Text>
        <Progress
          size="sm"
          value={count}
        />
      </Flex>
    </VStack>
  );
};

export default function Languages() {
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
        Languages
      </Text>
      <Flex
        flexDir="column"
        gap="20px"
      >
        {languages.map((item, id) => (
          <ProgressBar
            key={id}
            name={item.name}
            percentage={item.percentage}
          />
        ))}
      </Flex>
    </Flex>
  );
}
