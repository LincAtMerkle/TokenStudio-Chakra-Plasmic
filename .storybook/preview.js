import React from 'react';

import { theme as proTheme } from "../theme/src/index";
import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const theme = extendTheme(
    {
      colors: { ...baseTheme.colors, brand: baseTheme.colors.yellow },
    },
    proTheme
  );

export const parameters = {
  chakra: {
    theme,
  },
}
