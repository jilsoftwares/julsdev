import { Divider, Grid, GridItem } from "@chakra-ui/react";
import DevContainer from "../DevContainer";
import LogoSection from "./logoSection";
import InfoSection from "./InfoSection";
import MenuSection from "./menuSection";

export default function Footer() {
  return (
    <DevContainer>
      <Divider
        my={10}
        bgColor="Grey"
      />
      <Grid
        templateAreas={{
          lg: `
            "logo info menu"
          `,
          base: `
                "logo"
                "info"
                "menu"
              `,
        }}
        gridTemplateRows={{
          base: "repeat(5, auto)",
          lg: "auto",
        }}
        gridTemplateColumns={{
          base: "1fr",
          lg: "repeat(3, 1fr)",
        }}
        gap={{ base: 4, md: 8 }}
        rowGap={10}
      >
        <GridItem
          w={{ base: "auto", md: 270, lg: 300 }}
          area="logo"
          pb={{ base: 5, md: 0 }}
          justifySelf={{ base: "center", md: "left", lg: "left" }}
          colStart={0}
        >
          <LogoSection />
        </GridItem>
        <GridItem
          w={{ base: "auto", md: 270, lg: 300 }}
          area="info"
          pb={{ base: 5, md: 0 }}
          justifySelf={{ base: "center", md: "left", lg: "left" }}
          colStart={0}
        >
          <InfoSection />
        </GridItem>
        <GridItem
          w={{ base: "auto", md: 270, lg: 300 }}
          area="menu"
          pb={{ base: 5, md: 0 }}
          justifySelf={{ base: "center", md: "left", lg: "left" }}
          colStart={0}
        >
          <MenuSection />
        </GridItem>
      </Grid>
    </DevContainer>
  );
}
