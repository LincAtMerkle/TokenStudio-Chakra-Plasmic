import { App }  from "./CardHeaderWithAvatar";
import {registerComponent } from "@plasmicapp/host";

export function registerCardHeaderWithAvatar(){
    registerComponent(App, {
        name: "CardHeaderWithAvatar",
        importPath: "./components/custom/chakraPro/Card Headers/CardHeaderWithAvatar",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 