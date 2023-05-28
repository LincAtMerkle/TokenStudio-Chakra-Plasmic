import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStatWithProgressBar(){
    registerComponent(App, {
        name: "StatWithProgressBar",
        importPath: "./components/custom/chakraPro/Aplication/Stats/StatWithProgressBar",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 