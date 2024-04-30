import { HStack, Link, Image } from "@chakra-ui/react";

import DevContainer from "../DevContainer";
import { navLinks } from "./navLinks";
import { useRouter } from "next/router";

import NextLink from "next/link";
import AnimatedLink from "../AnimatedLink";

export default function Header() {
  const router = useRouter();
  return (
    <DevContainer>
      <HStack
        pb={{ base: "80px", md: "0px" }}
        justifyContent="space-between"
      >
        <Link href={"/"}>
          <Image
            src="/julsDev-logo.png"
            alt="juls dev"
          />
        </Link>
        <HStack
          gap={8}
          display={{ base: "none", md: "none", lg: "flex" }}
        >
          {navLinks.map(({ title, src }, id) => {
            const isActive = router.pathname === src;
            return (
              <AnimatedLink
                key={id}
                as={NextLink}
                href={src}
                fontWeight={isActive ? 600 : 400}
                isActive={isActive}
                _hover={{
                  textDecor: "none",
                }}
              >
                {title}
              </AnimatedLink>
            );
          })}
        </HStack>
      </HStack>
    </DevContainer>
  );
}
