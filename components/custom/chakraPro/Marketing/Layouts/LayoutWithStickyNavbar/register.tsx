import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLayoutWithStickyNavbar(){
    registerComponent(App, {
        name: "LayoutWithStickyNavbar",
        importPath: "./components/chakra/chakraPro/Marketing/Layouts/LayoutWithStickyNavbar",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 