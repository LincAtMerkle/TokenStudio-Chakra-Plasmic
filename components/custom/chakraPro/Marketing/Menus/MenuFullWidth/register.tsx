import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerMenuFullWidth(){
    registerComponent(App, {
        name: "MenuFullWidth",
        importPath: "./components/chakra/chakraPro/Marketing/Logo Grid/MenuFullWidth",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 