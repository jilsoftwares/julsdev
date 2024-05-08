import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
type Props = {
  label: string;
  error?: string;
  type?: string;
};

export default function BoxField({ label = "text", error, type }: Props) {
  return (
    <FormControl>
      <FormLabel fontSize={{ md: "20px", base: "18px" }}>{label}</FormLabel>
      <Input
        type={type}
        variant="flushed"
      />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
}
