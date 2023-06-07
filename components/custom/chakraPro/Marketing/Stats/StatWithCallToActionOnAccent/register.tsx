import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStatWithCallToActionOnAccent(){
    registerComponent(App, {
        name: "StatWithCallToActionOnAccent",
        importPath: "./components/chakra/chakraPro/Marketing/Stats/StatWithCallToActionOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 