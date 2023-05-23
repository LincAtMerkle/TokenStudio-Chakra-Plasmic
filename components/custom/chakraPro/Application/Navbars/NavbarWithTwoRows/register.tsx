import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerNavbarWithTwoRows(){
    registerComponent(App, {
        name: "NavbarWithTwoRows",
        importPath: "./components/custom/chakraPro/Aplication/Navbars/NavbarWithTwoRows",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 