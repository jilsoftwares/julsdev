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
        <Text>juliuslegaspi2014@gmail.com</Text>
        <Text>Mindanao, Davao City, Philippines</Text>
      </Flex>
    </Box>
  );
}
