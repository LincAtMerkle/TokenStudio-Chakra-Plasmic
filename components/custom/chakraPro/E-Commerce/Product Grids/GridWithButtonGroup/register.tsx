import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerGridWithButtonGroup(){
    registerComponent(App, {
        name: "GridWithButtonGroup",
        importPath: "./components/custom/chakraPro/GridWithButtonGroup",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 