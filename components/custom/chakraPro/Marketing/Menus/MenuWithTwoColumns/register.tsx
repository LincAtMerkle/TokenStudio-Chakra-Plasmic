import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerMenuWithTwoColumns(){
    registerComponent(App, {
        name: "MenuWithTwoColumns",
        importPath: "./components/custom/chakraPro/Marketing/Logo Grid/MenuWithTwoColumns",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 