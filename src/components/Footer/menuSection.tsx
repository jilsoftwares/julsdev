import { Box, Flex, Link, Image, Text } from "@chakra-ui/react";
import DevButton from "../DevButton";
import { navLinks } from "../Header/navLinks";
import styles from "@/styles/buttonSplit.module.css";

export default function MenuSection() {
  return (
    <Box>
      <Flex
        gap={4}
        flexDir="row"
      >
        <div className={styles.splitToTwo}>
          {navLinks.map(({ title, src }, id) => {
            return (
              <Box
                key={id}
                pb="20px"
              >
                <DevButton link={src}>{title}</DevButton>
              </Box>
            );
          })}
        </div>
      </Flex>
    </Box>
  );
}
