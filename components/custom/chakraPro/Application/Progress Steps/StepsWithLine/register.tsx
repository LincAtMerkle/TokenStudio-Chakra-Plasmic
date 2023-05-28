import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStepsWithLine(){
    registerComponent(App, {
        name: "StepsWithLine",
        importPath: "./components/custom/chakraPro/Aplication/Progress Steps/StepsWithLine",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 