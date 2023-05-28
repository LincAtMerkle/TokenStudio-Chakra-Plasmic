import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStepsWithCirclesAndText(){
    registerComponent(App, {
        name: "StepsWithCirclesAndText",
        importPath: "./components/custom/chakraPro/Aplication/Progress Steps/StepsWithCirclesAndText",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 