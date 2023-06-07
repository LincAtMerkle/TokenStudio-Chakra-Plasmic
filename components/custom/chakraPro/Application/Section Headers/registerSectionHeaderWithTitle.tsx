import { App }  from "./SectionHeaderWithTitle";
import {registerComponent } from "@plasmicapp/host";

export function registerSectionHeaderWithTitle(){
    registerComponent(App, {
        name: "SectionHeaderWithTitle",
        importPath: "./components/chakra/chakraPro/Aplication/Section Headers/SectionHeaderWithTitle",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 