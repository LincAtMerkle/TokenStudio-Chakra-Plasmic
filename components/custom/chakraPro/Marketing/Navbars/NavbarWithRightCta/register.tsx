import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerNavbarWithRightCta(){
    registerComponent(App, {
        name: "NavbarWithRightCta",
        importPath: "./components/chakra/chakraPro/Marketing/Navbars/NavbarWithRightCta",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 