import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Education from "./Education";
import Languages from "./Languages";
import PersonalInformation from "./PersonalInformation";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";

export default function DesktopScreen() {
  return (
    <Grid
      templateAreas={{
        lg: `
       "leftSection  rightSection"
     `,
      }}
      gridTemplateRows={{
        lg: "auto",
      }}
      gridTemplateColumns={{
        lg: "256px 1fr",
      }}
      gap={{ md: "80px" }}
      rowGap={10}
      px="20px"
      pb="20px"
      pt="52px"
      mb="100px"
    >
      <GridItem
        w={{ lg: 256 }}
        area="leftSection"
        pb={{ md: 0 }}
        justifySelf={{ lg: "left" }}
        colStart={0}
      >
        <Flex
          flexDir="column"
          gap="50px"
        >
          <Education />
          <Languages />
        </Flex>
      </GridItem>
      <GridItem
        area="rightSection"
        pb={{ md: 0 }}
        justifySelf={{ lg: "left" }}
      >
        <Flex
          flexDir="column"
          gap="100px"
        >
          <PersonalInformation />
          <WorkExperience />
          <Skills />
        </Flex>
      </GridItem>
    </Grid>
  );
}
