import * as React from "react";
import { MobileBottomNav } from "./MobileBottomNav";
import { NavHeader } from "./NavHeader";
import { NavMenu } from "./NavMenu";
import { TopBanner } from "./TopBanner";
import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export type AppProps = BoxProps & {
  children: ReactNode;
};

export function App({ className, children, ...rest }: AppProps) {
  return (
    <Box className={className}>
      <TopBanner />
      <NavHeader.Desktop />
      <NavMenu.Desktop />
      <NavHeader.Mobile />
      <NavMenu.Mobile />
      <MobileBottomNav />
    </Box>
  );
}
