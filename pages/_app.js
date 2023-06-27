
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider>
    <ChakraProvider>
    <PlasmicRootProvider Head={Head}>
        <Component {...pageProps} />
    </PlasmicRootProvider>
    </ChakraProvider>
    </CacheProvider>
  );
}

export default MyApp
  