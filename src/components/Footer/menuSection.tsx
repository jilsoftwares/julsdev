import { Box, Flex, Link, Image, Text } from "@chakra-ui/react";
import DevButton from "../DevButton";
import { navLinks } from "../Header/navLinks";

export default function MenuSection() {
  return (
    <Box>
      <Flex
        gap={4}
        flexDir="row"
      >
        {navLinks.map(({ title, src }, id) => {
          return <DevButton key={id}>{title}</DevButton>;
        })}
      </Flex>
    </Box>
  );
}
