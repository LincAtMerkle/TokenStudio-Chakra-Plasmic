import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerShowcaseGrid(){
    registerComponent(App, {
        name: "ShowcaseGrid",
        importPath: "./components/custom/chakraPro/ShowcaseGrid",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 