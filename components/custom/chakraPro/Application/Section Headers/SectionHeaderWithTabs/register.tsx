import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerSectionHeaderWithTabs(){
    registerComponent(App, {
        name: "SectionHeaderWithTabs",
        importPath: "./components/custom/chakraPro/Aplication/Section Headers/SectionHeaderWithTabs",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 