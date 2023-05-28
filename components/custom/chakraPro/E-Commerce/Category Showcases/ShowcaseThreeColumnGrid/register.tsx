import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerShowcaseThreeColumnGrid(){
    registerComponent(App, {
        name: "ShowcaseThreeColumnGrid",
        importPath: "./components/custom/chakraPro/ShowcaseThreeColumnGrid",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 