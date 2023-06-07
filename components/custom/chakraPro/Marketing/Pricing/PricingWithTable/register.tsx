import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerPricingWithTable(){
    registerComponent(App, {
        name: "PricingWithTable",
        importPath: "./components/chakra/chakraPro/Marketing/Pricing/PricingWithTable",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 