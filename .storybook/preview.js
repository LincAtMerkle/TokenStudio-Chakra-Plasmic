import React from 'react';

import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
import { theme as proTheme } from "../theme/src/index";
import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const theme = extendTheme(
    {
      colors: { ...baseTheme.colors, brand: baseTheme.colors.yellow },
    },
    proTheme
  );
  console.log(baseTheme)
  
export const decorators = [
  (Story) => (
    
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme:{theme: proTheme},
  },
}

// export const decorators = [
//   (Story) => {
//     globalCss({
//       // "@import": "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",
//       "*": {
//         boxSizing: "border-box",
//         "&:focus": {
//           outline: "1px dashed black",
//           outlineOffset: "1px"
//         }
//       },
//       body: {
//         fontFamily: "$body",
//       }
//     })()

//     return (
//     <ChakraProvider theme={theme}>
//       <ThemeProvider>
//         <InterfaceIconsProvider>
//           <Story />
//         </InterfaceIconsProvider>
//       </ThemeProvider>
//     </ChakraProvider>
//     )
//   },
// ]