import { Box, Flex, Link, Image, Text } from "@chakra-ui/react";

export default function InfoSection() {
  return (
    <Box>
      <Flex
        gap={9}
        flexDir="column"
      >
        <Text
          fontWeight="600"
          flex={1}
        >
          Information
        </Text>
        <Text>jilsoftwares@gmail.com</Text>
        <Text pr="150px">Mindanao, Davao City, Philippines</Text>
      </Flex>
    </Box>
  );
}
