import { Colors, extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors: Colors = {
  Black: "#1F1F1F",
  LightGrey: "#FAFAFA",
  Grey: "#F1F1F1",
};

const overrides = {
  config,
  colors,
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  styles: {
    global: {
      "*:focus": {
        boxShadow: "none !important",
        borderColor: "Gray !important",
      },
      body: {
        fontSize: { base: "16px", md: "18px", lg: "20px" },
        bg: "LightGrey",
        color: "Black",
        lineHeight: "130%",
        whiteSpace: "pre-line",
      },
    },
  },
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: "#1b1b1b",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 600,
        lineHeight: "110%",
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderBottom: "1px solid",
          borderBottomColor: "Black",
          fontSize: "20px",
          fontWeight: 500,
          borderRadius: 0,
          pb: 1,
          lineHeight: "125%",
        },
      },
      defaultProps: {
        variant: "unstyled",
      },
    },
  },
};

export default extendTheme(overrides);