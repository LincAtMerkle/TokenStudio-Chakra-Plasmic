import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerThreeTiersWithToggle(){
    registerComponent(App, {
        name: "ThreeTiersWithToggle",
        importPath: "./components/chakra/chakraPro/Marketing/Pricing/ThreeTiersWithToggle",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 