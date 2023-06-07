import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStatWithCallToAction(){
    registerComponent(App, {
        name: "StatWithCallToAction",
        importPath: "./components/chakra/chakraPro/Marketing/Stats/StatWithCallToAction",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 