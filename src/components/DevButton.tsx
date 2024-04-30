import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function DevButton({ children }: Props) {
  return <Button>{children}</Button>;
}
