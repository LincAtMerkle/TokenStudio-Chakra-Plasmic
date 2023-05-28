import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerSectionHeaderWithTitle(){
    registerComponent(App, {
        name: "SectionHeaderWithTitle",
        importPath: "./components/custom/chakraPro/Aplication/Section Headers/SectionHeaderWithTitle",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 