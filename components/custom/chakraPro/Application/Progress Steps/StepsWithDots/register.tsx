import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStepsWithDots(){
    registerComponent(App, {
        name: "StepsWithDots",
        importPath: "./components/chakra/chakraPro/Aplication/Progress Steps/StepsWithDots",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 