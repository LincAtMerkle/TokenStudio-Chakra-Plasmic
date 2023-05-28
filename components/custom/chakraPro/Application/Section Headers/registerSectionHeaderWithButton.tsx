import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerSectionHeaderWithButton(){
    registerComponent(App, {
        name: "SectionHeaderWithButton",
        importPath: "./components/custom/chakraPro/Aplication/Section Headers/SectionHeaderWithButton",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 