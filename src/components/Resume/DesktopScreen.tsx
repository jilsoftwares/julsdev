import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Education from "./Education";
import Languages from "./Languages";
import PersonalInformation from "./PersonalInformation";

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
      gap={{ md: "45px" }}
      rowGap={10}
      px="20px"
      pb="20px"
      pt="52px"
    >
      <GridItem
        w={{ lg: 256 }}
        area="leftSection"
        pb={{ md: 0 }}
        justifySelf={{ lg: "left" }}
        colStart={0}
      >
        <Education />
        <Languages />
      </GridItem>
      <GridItem
        w={{ lg: 800 }}
        area="rightSection"
        pb={{ md: 0 }}
        justifySelf={{ lg: "left" }}
        colStart={0}
      >
        <PersonalInformation />
      </GridItem>
    </Grid>
  );
}
