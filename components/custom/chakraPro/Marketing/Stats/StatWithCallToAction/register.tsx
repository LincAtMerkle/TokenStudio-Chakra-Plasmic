import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStatWithCallToAction(){
    registerComponent(App, {
        name: "StatWithCallToAction",
        importPath: "./components/custom/chakraPro/Marketing/Stats/StatWithCallToAction",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 