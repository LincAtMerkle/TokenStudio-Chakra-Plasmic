import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCenteredWithSlider(){
    registerComponent(App, {
        name: "CenteredWithSlider",
        importPath: "./components/chakra/chakraPro/Marketing/Team/CenteredWithSlider",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 