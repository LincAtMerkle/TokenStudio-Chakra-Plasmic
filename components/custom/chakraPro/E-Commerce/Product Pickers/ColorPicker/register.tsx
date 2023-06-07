import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerColorPicker(){
    registerComponent(App, {
        name: "ColorPicker",
        importPath: "./components/chakra/chakraPro/ColorPicker",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 