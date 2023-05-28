import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStepsWithAccent(){
    registerComponent(App, {
        name: "StepsWithAccent",
        importPath: "./components/custom/chakraPro/Aplication/Progress Steps/StepsWithAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 