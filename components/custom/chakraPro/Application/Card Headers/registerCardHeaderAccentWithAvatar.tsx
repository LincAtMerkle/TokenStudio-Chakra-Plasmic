import { App }  from "./CardHeaderAccentWithAvatar";
import {registerComponent } from "@plasmicapp/host";

export function registerCardHeaderAccentWithAvatar(){
    registerComponent(App, {
        name: "CardHeaderAccentWithAvatar",
        importPath: "./components/chakra/chakraPro/Card Headers/CardHeaderAccentWithAvatar",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 