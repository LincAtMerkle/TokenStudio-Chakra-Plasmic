import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerNavWithCenteredLogo(){
    registerComponent(App, {
        name: "NavWithCenteredLogo",
        importPath: "./components/custom/chakraPro/NavWithCenteredLogo",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 