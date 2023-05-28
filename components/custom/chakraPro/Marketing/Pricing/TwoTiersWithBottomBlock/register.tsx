import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerTwoTiersWithBottomBlock(){
    registerComponent(App, {
        name: "TwoTiersWithBottomBlock",
        importPath: "./components/custom/chakraPro/Marketing/Pricing/TwoTiersWithBottomBlock",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 