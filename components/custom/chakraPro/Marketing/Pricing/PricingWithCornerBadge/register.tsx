import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerPricingWithCornerBadge(){
    registerComponent(App, {
        name: "PricingWithCornerBadge",
        importPath: "./components/custom/chakraPro/Marketing/Pricing/PricingWithCornerBadge",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 