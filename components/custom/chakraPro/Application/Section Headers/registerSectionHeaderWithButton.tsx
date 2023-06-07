import { App }  from "./SectionHeaderWithButton";
import {registerComponent } from "@plasmicapp/host";

export function registerSectionHeaderWithButton(){
    registerComponent(App, {
        name: "SectionHeaderWithButton",
        importPath: "./components/chakra/chakraPro/Aplication/Section Headers/SectionHeaderWithButton",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 