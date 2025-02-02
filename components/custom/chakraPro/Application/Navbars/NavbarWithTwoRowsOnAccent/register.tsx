import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerNavbarWithTwoRowsOnAccent(){
    registerComponent(App, {
        name: "NavbarWithTwoRowsOnAccent",
        importPath: "./components/chakra/chakraPro/Aplication/Navbars/NavbarWithTwoRowsOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 