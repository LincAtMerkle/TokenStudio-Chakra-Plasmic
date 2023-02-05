import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";

export type ToggleColorModeProps = {
  className?: string;
};

export function ToggleColorMode({className }: ToggleColorModeProps) {
  const { toggleColorMode } = useColorMode();
  return (
    <div className={className}>
      <Button variant="primary" onClick={toggleColorMode}>
        Light / Dark
      </Button>
    </div>
  );
}
