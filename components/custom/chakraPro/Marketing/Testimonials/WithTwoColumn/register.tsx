import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerWithTwoColumn(){
    registerComponent(App, {
        name: "WithTwoColumn",
        importPath: "./components/chakra/chakraPro/Marketing/Team/WithTwoColumn",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 