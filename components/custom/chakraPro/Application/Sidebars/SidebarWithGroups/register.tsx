import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerSidebarWithGroups(){
    registerComponent(App, {
        name: "SidebarWithGroups",
        importPath: "./components/custom/chakraPro/Aplication/Sidebars/SidebarWithGroups",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 