import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCenteredWithSlider(){
    registerComponent(App, {
        name: "CenteredWithSlider",
        importPath: "./components/custom/chakraPro/Marketing/Team/CenteredWithSlider",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 