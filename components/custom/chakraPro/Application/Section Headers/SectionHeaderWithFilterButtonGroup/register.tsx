import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerSectionHeaderWithFilterButtonGroup(){
    registerComponent(App, {
        name: "SectionHeaderWithFilterButtonGroup",
        importPath: "./components/chakra/chakraPro/Aplication/Section Headers/SectionHeaderWithFilterButtonGroup",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 