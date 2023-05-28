import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStepsInVerticalOrientation(){
    registerComponent(App, {
        name: "StepsInVerticalOrientation",
        importPath: "./components/custom/chakraPro/Aplication/Progress Steps/StepsInVerticalOrientation",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 