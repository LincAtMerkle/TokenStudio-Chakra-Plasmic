import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerMenuSingleColumn(){
    registerComponent(App, {
        name: "MenuSingleColumn",
        importPath: "./components/custom/chakraPro/Marketing/Logo Grid/MenuSingleColumn",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 