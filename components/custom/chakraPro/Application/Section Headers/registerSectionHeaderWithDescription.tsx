import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerSectionHeaderWithDescription(){
    registerComponent(App, {
        name: "SectionHeaderWithDescription",
        importPath: "./components/custom/chakraPro/Aplication/Section Headers/SectionHeaderWithDescription",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 