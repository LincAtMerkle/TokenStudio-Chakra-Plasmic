import { App }  from "./CardHeaderWithButton";
import {registerComponent } from "@plasmicapp/host";

export function registerCardHeaderWithButton(){
    registerComponent(App, {
        name: "CardHeaderWithButton",
        importPath: "./components/custom/chakraPro/Card Headers/CardHeaderWithButton",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 