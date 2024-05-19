import { Flex, Select, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  label: string;
  options: string[];
};
export default function BoxSelect({ label, options }: Props) {
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
        {options.map((item, id) => (
          <option
            value={item}
            key={id}
          >
            {item}
          </option>
        ))}
      </Select>
    </Flex>
  );
}
