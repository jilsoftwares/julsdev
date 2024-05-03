import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

export default function ProfileInformation() {
  return (
    <Grid
      templateAreas={{
        lg: `
       "image info"
     `,
        base: `
           "image"
           "info"
           
         `,
      }}
      gridTemplateRows={{
        base: "repeat(5, auto)",
        lg: "auto",
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "auto 1fr",
      }}
      gap={{ base: 4, md: "80px" }}
      rowGap={10}
      px="20px"
      py="40px"
    >
      <GridItem
        area="image"
        pb={{ base: 5, md: 0 }}
      >
        <Box
          w="252px"
          h="248px"
          backgroundColor="#D9D9D9"
          overflow="hidden"
          borderRadius={"20px"}
        >
          <Image alt="image" />
        </Box>
      </GridItem>
      <GridItem area="info">
        <Flex
          flexDir="column"
          gap={"40px"}
          w="393px"
          h="192px"
        >
          <Text
            fontSize="70px"
            fontWeight={700}
            textTransform="uppercase"
            lineHeight={"70px"}
          >
            Julius Legaspi
          </Text>
          <Flex flexDir="column">
            <Text
              fontSize="40px"
              lineHeight={"45px"}
            >
              {capitalizeFirstLetter("owner/front-end developer")}
            </Text>
            <Text
              fontSize="40px"
              lineHeight={"45px"}
            >
              Jul’s Dev
            </Text>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
}
