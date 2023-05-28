import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerColorPicker(){
    registerComponent(App, {
        name: "ColorPicker",
        importPath: "./components/custom/chakraPro/ColorPicker",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 