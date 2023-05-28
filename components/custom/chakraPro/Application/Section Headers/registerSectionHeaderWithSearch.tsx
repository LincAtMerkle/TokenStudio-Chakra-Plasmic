import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerSectionHeaderWithSearch(){
    registerComponent(App, {
        name: "SectionHeaderWithSearch",
        importPath: "./components/custom/chakraPro/Aplication/Section Headers/SectionHeaderWithSearch",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 