import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerPricingWithThreeTiers(){
    registerComponent(App, {
        name: "PricingWithThreeTiers",
        importPath: "./components/custom/chakraPro/Marketing/Pricing/PricingWithThreeTiers",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 