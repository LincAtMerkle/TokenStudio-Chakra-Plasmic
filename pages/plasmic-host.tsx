
import * as React from 'react';
import Script from 'next/script';
import { PlasmicCanvasHost, registerComponent, registerToken } from '@plasmicapp/host';
import { registerAllChakra } from "../components/chakra";
import { registerAllCustom } from "../components/custom";
// import  semanticTokens from "../theme/src/foundations/tokens"


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

registerAllChakra();
registerAllCustom();


// Object.entries(semanticTokens.colors)
//   .flatMap(([colorName, colorOptions]) =>
//     Object.entries(colorOptions).map(([colorLevel, colorValue]) => ({
//       name: `${colorName} ${colorLevel}`,
//       value: colorValue
//     })
//   )).forEach(({ name, value}) => {
//     registerToken({
//       type: "color",
//       name,
//       //@ts-ignore
//       value
//     })
//   })


//   Object.entries(semanticTokens.space)
//   .flatMap(([spaceName, spaceOptions]) =>
//     Object.entries(spaceOptions).map(([spaceLevel, spaceValue]) => ({
//       name: `${spaceName} ${spaceLevel}`,
//       value: spaceValue
//     })
//   )).forEach(({ name, value}) => {
//     registerToken({
//       type: "spacing",
//       name,
//       //@ts-ignore
//       value
//     })
//   })

//   Object.entries(semanticTokens.fonts)
//   .flatMap(([fontsName, fontsOptions]) =>
//     Object.entries(fontsOptions).map(([fontsLevel, fontsValue]) => ({
//       name: `${fontsName} ${fontsLevel}`,
//       value: fontsValue
//     })
//   )).forEach(({ name, value}) => {
//     registerToken({
//       type: "font-family",
//       name,
//       //@ts-ignore
//       value
//     })
//   })

//   Object.entries(semanticTokens.fontSizes)
//   .flatMap(([fontSizeName, fontSizeOptions]) =>
//     Object.entries(fontSizeOptions).map(([fontSizeLevel, fontSizeValue]) => ({
//       name: `${fontSizeName} ${fontSizeLevel}`,
//       value: fontSizeValue
//     })
//   )).forEach(({ name, value}) => {
//     registerToken({
//       type: "font-size",
//       name,
//       //@ts-ignore
//       value
//     })
//   })

//   Object.entries(semanticTokens.fontWeights)
//   .flatMap(([fontWeightName, fontWeightOptions]) =>
//     Object.entries(fontWeightOptions).map(([fontWeightLevel, fontWeightValue]) => ({
//       name: `${fontWeightName} ${fontWeightLevel}`,
//       value: fontWeightValue
//     })
//   )).forEach(({ name, value}) => {
//     registerToken({
//       // Samuel says "Use line-height for font-weight" for now
//       type: "line-height",
//       name,
//       //@ts-ignore
//       value
//     })
//   })

//   // Add radii, font-weight, sizes, borders to Plasmic, 
//   // Add opacity to TokenStudio, 

//   Object.entries(semanticTokens.radii)
//   .flatMap(([radiiName, radiiOptions]) =>
//     Object.entries(radiiOptions).map(([radiiLevel, radiiValue]) => ({
//       name: `${radiiName} ${radiiLevel}`,
//       value: radiiValue
//     })
//   )).forEach(({ name, value}) => {
//     registerToken({
//       // Samuel says "Use spacing for radii" for now
//       type: "spacing",
//       name,
//       //@ts-ignore
//       value
//     })
//   })

//   Object.entries(semanticTokens.sizes)
//   .flatMap(([sizeName, sizeOptions]) =>
//     Object.entries(sizeOptions).map(([sizeLevel, sizeValue]) => ({
//       name: `${sizeName} ${sizeLevel}`,
//       value: sizeValue
//     })
//   )).forEach(({ name, value}) => {
//     registerToken({
//       // Samuel says "Use spacing for sizes" for now
//       type: "spacing",
//       name,
//       //@ts-ignore
//       value
//     })
//   })

//   Object.entries(semanticTokens.borders)
//   .flatMap(([borderName, borderOptions]) =>
//     Object.entries(borderOptions).map(([borderLevel, borderValue]) => ({
//       name: `${borderName} ${borderLevel}`,
//       value: borderValue
//     })
//   )).forEach(({ name, value}) => {
//     registerToken({
//       // Samuel says "Use spacing for border" for now
//       type: "spacing",
//       name,
//       //@ts-ignore
//       value
//     })
//   })


