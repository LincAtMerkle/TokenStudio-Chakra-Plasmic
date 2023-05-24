import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerSectionHeaderWithFilterButtonGroupm(){
    registerComponent(App, {
        name: "SectionHeaderWithFilterButtonGroup",
        importPath: "./components/custom/chakraPro/Aplication/Section Headers/SectionHeaderWithFilterButtonGroup",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 