import { App }  from "./SectionHeaderWithDescription";
import {registerComponent } from "@plasmicapp/host";

export function registerSectionHeaderWithDescription(){
    registerComponent(App, {
        name: "SectionHeaderWithDescription",
        importPath: "./components/chakra/chakraPro/Aplication/Section Headers/SectionHeaderWithDescription",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 