import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerNavWithCenteredSearch(){
    registerComponent(App, {
        name: "NavWithCenteredSearch",
        importPath: "./components/custom/chakraPro/NavWithCenteredSearch",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 