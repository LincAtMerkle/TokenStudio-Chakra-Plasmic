import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerNavbarWithTabs(){
    registerComponent(App, {
        name: "NavbarWithTabs",
        importPath: "./components/chakra/chakraPro/Marketing/Navbars/NavbarWithTabs",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 