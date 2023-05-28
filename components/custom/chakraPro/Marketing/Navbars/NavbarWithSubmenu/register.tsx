import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerNavbarWithSubmenu(){
    registerComponent(App, {
        name: "NavbarWithSubmenu",
        importPath: "./components/custom/chakraPro/Marketing/Navbars/NavbarWithSubmenu",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 