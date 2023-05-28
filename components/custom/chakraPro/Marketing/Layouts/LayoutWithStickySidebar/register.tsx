import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLayoutWithStickySidebar(){
    registerComponent(App, {
        name: "LayoutWithStickySidebar",
        importPath: "./components/custom/chakraPro/Marketing/Layouts/LayoutWithStickySidebar",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 