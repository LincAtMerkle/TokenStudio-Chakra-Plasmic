import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerNavbarWithAvatarOnAccent(){
    registerComponent(App, {
        name: "NavbarWithAvatarOnAccent",
        importPath: "./components/chakra/chakraPro/Aplication/Navbars/NavbarWithAvatarOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 