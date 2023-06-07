import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerNavbarWithFullWidthSubmenu(){
    registerComponent(App, {
        name: "NavbarWithFullWidthSubmenu",
        importPath: "./components/chakra/chakraPro/Marketing/Navbars/NavbarWithFullWidthSubmenu",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 