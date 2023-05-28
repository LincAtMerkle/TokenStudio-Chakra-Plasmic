import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerFiltersWithDropdown(){
    registerComponent(App, {
        name: "FiltersWithDropdown",
        importPath: "./components/custom/chakraPro/FiltersWithDropdown",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 