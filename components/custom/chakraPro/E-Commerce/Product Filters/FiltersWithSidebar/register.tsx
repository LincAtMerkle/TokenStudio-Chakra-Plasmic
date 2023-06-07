import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerFiltersWithSidebar(){
    registerComponent(App, {
        name: "FiltersWithSidebar",
        importPath: "./components/chakra/chakraPro/FiltersWithSidebar",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 