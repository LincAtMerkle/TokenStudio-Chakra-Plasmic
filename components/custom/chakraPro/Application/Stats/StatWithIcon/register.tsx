import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStatWithIcon(){
    registerComponent(App, {
        name: "StatWithIcon",
        importPath: "./components/chakra/chakraPro/Aplication/Stats/StatWithIcon",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 