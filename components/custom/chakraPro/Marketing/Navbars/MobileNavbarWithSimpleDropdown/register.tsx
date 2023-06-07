import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerMobileNavbarWithSimpleDropdown(){
    registerComponent(App, {
        name: "MobileNavbarWithSimpleDropdown",
        importPath: "./components/chakra/chakraPro/Marketing/Navbars/MobileNavbarWithSimpleDropdown",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 