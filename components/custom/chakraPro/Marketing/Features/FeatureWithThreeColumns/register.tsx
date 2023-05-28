import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerFeatureWithThreeColumns(){
    registerComponent(App, {
        name: "FeatureWithThreeColumns",
        importPath: "./components/custom/chakraPro/Marketing/Features/FeatureWithThreeColumns",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 