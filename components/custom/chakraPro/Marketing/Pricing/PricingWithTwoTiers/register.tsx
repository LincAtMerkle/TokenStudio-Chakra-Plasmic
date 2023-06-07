import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerPricingWithTwoTiers(){
    registerComponent(App, {
        name: "PricingWithTwoTiers",
        importPath: "./components/chakra/chakraPro/Marketing/Pricing/PricingWithTwoTiers",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 