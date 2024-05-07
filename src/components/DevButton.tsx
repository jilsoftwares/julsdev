import { Button, Link } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  link?: string;
  rightIcon?: any;
};

export default function DevButton({ children, link, rightIcon }: Props) {
  return (
    <Link href={link}>
      <Button
        rightIcon={rightIcon}
        textTransform={"uppercase"}
        px="21px"
        py="16px"
        bg="white"
        _hover={{
          backgroundColor: "black",
          textColor: "white",
          border: 0,
          paddingX: "23px",
          paddingY: "18px",
        }}
        transition={"color 0.2s"}
        rounded={3}
        border="2px"
      >
        {children}
      </Button>
    </Link>
  );
}
