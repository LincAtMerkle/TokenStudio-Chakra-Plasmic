import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerQuantityPicker(){
    registerComponent(App, {
        name: "QuantityPicker",
        importPath: "./components/custom/chakraPro/QuantityPicker",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 