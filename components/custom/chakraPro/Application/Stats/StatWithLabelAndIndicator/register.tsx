import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStatWithLabelAndIndicator(){
    registerComponent(App, {
        name: "StatWithLabelAndIndicator",
        importPath: "./components/chakra/chakraPro/Aplication/Stats/StatWithLabelAndIndicator",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 