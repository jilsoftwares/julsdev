import { Flex, Select, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  label: string;
};
export default function BoxSelect({ label }: Props) {
  return (
    <Flex
      flexDir="column"
      w="full"
    >
      <Text fontSize={{ md: "20px", base: "18px" }}>{label}</Text>
      <Select
        variant="flushed"
        placeholder="Select option"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Flex>
  );
}
