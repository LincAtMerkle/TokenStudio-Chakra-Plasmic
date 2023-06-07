import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerMobileNavWithAccordion(){
    registerComponent(App, {
        name: "MobileNavWithAccordion",
        importPath: "./components/chakra/chakraPro/Marketing/Navbars/MobileNavWithAccordion",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 