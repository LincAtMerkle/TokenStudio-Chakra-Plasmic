
// import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { ModifierProvider } from '../src/components/tokensCtx';
import Head from "next/head";

// const [color, setColor] = React.useState('blue');
// const [type, setType] = React.useState('casual');

function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider Head={Head}>
      <ModifierProvider modifiers={{ color: 'green', type: 'casual'}}>
        <Component {...pageProps} />
      </ModifierProvider>
    </PlasmicRootProvider>
  );
}

export default MyApp
  