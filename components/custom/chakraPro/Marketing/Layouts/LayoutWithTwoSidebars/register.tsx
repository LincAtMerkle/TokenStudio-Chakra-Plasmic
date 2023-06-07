import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLayoutWithTwoSidebars(){
    registerComponent(App, {
        name: "LayoutWithTwoSidebars",
        importPath: "./components/chakra/chakraPro/Marketing/Layouts/LayoutWithTwoSidebars",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 