import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerPricingWithThreeTiers(){
    registerComponent(App, {
        name: "PricingWithThreeTiers",
        importPath: "./components/chakra/chakraPro/Marketing/Pricing/PricingWithThreeTiers",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 