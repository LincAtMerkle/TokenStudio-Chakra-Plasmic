
import * as React from 'react';
import Script from 'next/script';
import { PlasmicCanvasHost, registerComponent, registerToken } from '@plasmicapp/host';
import { registerAll } from "../components/chakra";

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// registerComponent(...)

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}

registerAll();

registerToken({
  type: "color",
  name: "Token from code",
  value: "#F123CC"
})

const tokenStudio = {
  "colors": {
    "st-dark": {
      "color-fl-green-50": "#fcfff6",
      "color-fl-green-100": "#f2ffdc",
      "color-fl-green-200": "#e6ffb8",
    },
    "st-light": {
      "color-fl-green-50": "#fcfff6",
      "color-fl-green-100": "#f2ffdc",
      "color-fl-green-200": "#e6ffb8",
    }
  }
}

Object.entries(tokenStudio.colors)
  .flatMap(([colorName, colorOptions]) =>
    Object.entries(colorOptions).map(([colorLevel, colorValue]) => ({
      name: `${colorName} ${colorLevel}`,
      value: colorValue
    })
  )).forEach(({ name, value}) => {
    registerToken({
      type: "color",
      name,
      value
    })
  })