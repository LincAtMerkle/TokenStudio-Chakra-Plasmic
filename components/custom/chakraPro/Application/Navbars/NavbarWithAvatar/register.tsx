import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerNavbarWithAvatar(){
    registerComponent(App, {
        name: "NavbarWithAvatar",
        importPath: "./components/chakra/chakraPro/Aplication/Navbars/NavbarWithAvatar",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 