import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerGridQuiteMinimalistic(){
    registerComponent(App, {
        name: "GridQuiteMinimalistic",
        importPath: "./components/chakra/chakraPro/GridQuiteMinimalistic",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 