
// import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider Head={Head}>
      A<Component {...pageProps} />B
    </PlasmicRootProvider>
  );
}

export default MyApp
  