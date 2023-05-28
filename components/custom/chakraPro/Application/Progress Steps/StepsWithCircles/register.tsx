import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStepsWithCircles(){
    registerComponent(App, {
        name: "StepsWithCircles",
        importPath: "./components/custom/chakraPro/Aplication/Progress Steps/StepsWithCircles",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 