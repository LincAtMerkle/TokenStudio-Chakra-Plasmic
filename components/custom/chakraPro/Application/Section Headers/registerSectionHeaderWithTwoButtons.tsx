import { App }  from "./SectionHeaderWithTwoButtons";
import {registerComponent } from "@plasmicapp/host";

export function registerSectionHeaderWithTwoButtons(){
    registerComponent(App, {
        name: "SectionHeaderWithTwoButtons",
        importPath: "./components/chakra/chakraPro/Aplication/Section Headers/SectionHeaderWithTwoButtons",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 