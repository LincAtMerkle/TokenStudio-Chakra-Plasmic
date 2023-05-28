import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerSectionHeaderWithTwoButtons(){
    registerComponent(App, {
        name: "SectionHeaderWithTwoButtons",
        importPath: "./components/custom/chakraPro/Aplication/Section Headers/SectionHeaderWithTwoButtons",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 