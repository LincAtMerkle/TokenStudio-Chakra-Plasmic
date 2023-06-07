import { App }  from "./SectionHeaderWithSearch";
import {registerComponent } from "@plasmicapp/host";

export function registerSectionHeaderWithSearch(){
    registerComponent(App, {
        name: "SectionHeaderWithSearch",
        importPath: "./components/chakra/chakraPro/Aplication/Section Headers/SectionHeaderWithSearch",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 