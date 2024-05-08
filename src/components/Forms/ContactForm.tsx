import { Box, Button, Center, Flex, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import BoxField from "./customFields/BoxField";
import BoxSelect from "./customFields/BoxSelect";
import DevFadeInUp from "../DevFadeInUp";

export default function ContactForm() {
  return (
    <DevFadeInUp>
      <Flex
        flexDir="column"
        mt={{ md: "80px", base: "auto" }}
        gap="40px"
        border={2}
        rounded="md"
        bg="white"
        pt="20px"
        pb={{ md: "60px", base: "30px" }}
        px={{ md: "auto", base: "20px" }}
        boxShadow="5px 5px 5px rgba(0, 0, 0, 0.10)"
      >
        <Text
          fontSize={{ md: "50px", base: "30px" }}
          lineHeight="70px"
          fontWeight={700}
          textAlign="center"
        >
          Contact me now!
        </Text>
        <Center>
          <Flex
            flexDir={{ md: "row", base: "column" }}
            gap={{ md: "50px", base: "20px" }}
            justify="space-between"
            w={{ md: "570px", base: "full" }}
          >
            <BoxField label="What is your name?" />
            <BoxField label="What is your email address?" />
          </Flex>
        </Center>
        <Center>
          <Flex
            flexDir={{ md: "row", base: "column" }}
            gap={{ md: "50px", base: "20px" }}
            justify="space-between"
            w={{ md: "570px", base: "full" }}
          >
            <BoxSelect label="What is your plan?" />
            <BoxSelect label="What is your budget?" />
          </Flex>
        </Center>
        <Center>
          <Flex
            flexDir="column"
            // w="full"
          >
            <Text fontSize={{ md: "20px", base: "18px" }}>What is your is message?</Text>
            <Textarea
              variant="flushed"
              w="570px"
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                "-ms-overflow-style": "none" /* IE and Edge */,
                "scrollbar-width": "none" /* Firefox */,
              }}
            />
          </Flex>
        </Center>
        <Center>
          <Button
            fontSize="30px"
            textTransform="uppercase"
            py="16px"
            px="21px"
            bg="white"
            _hover={{
              bg: "#0978DE",
              color: "#ffffff",
              paddingX: "23px",
              border: 0,
              paddingY: "18px",
              rounded: "3px",
            }}
            transition={"color 0.2s"}
            rounded={3}
            border="2px"
          >
            sent
          </Button>
        </Center>
      </Flex>
    </DevFadeInUp>
  );
}
