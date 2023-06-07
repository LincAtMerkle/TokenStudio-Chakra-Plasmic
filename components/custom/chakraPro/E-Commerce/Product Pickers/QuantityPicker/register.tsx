import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerQuantityPicker(){
    registerComponent(App, {
        name: "QuantityPicker",
        importPath: "./components/chakra/chakraPro/QuantityPicker",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 