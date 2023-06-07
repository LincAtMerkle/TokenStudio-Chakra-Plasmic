import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerNavbarWithFullButton(){
    registerComponent(App, {
        name: "NavbarWithFullButton",
        importPath: "./components/chakra/chakraPro/Marketing/Navbars/NavbarWithFullButton",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 