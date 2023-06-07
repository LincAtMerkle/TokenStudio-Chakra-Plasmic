import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerPricingWithOneTier(){
    registerComponent(App, {
        name: "PricingWithOneTier",
        importPath: "./components/chakra/chakraPro/Marketing/Pricing/PricingWithOneTier",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 