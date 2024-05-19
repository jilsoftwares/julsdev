import { Box, Flex, Link, Image, Text } from "@chakra-ui/react";

export default function LogoSection() {
  return (
    <Box w="265px">
      <Flex
        gap={4}
        flexDir="column"
      >
        <Link href={"/"}>
          <Image
            src="/julsDev-logo.png"
            alt="juls dev"
          />
        </Link>
        <Text pr={10}>
          Assisting the company in improving its project, making it more seamless and efficient.
        </Text>
        <Text>©2024 JUL’S DEV</Text>
      </Flex>
    </Box>
  );
}
