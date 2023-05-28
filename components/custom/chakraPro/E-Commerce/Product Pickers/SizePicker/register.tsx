import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerSizePicker(){
    registerComponent(App, {
        name: "SizePicker",
        importPath: "./components/custom/chakraPro/SizePicker",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 