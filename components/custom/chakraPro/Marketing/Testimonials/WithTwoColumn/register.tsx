import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerWithTwoColumn(){
    registerComponent(App, {
        name: "WithTwoColumn",
        importPath: "./components/custom/chakraPro/Marketing/Team/WithTwoColumn",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 