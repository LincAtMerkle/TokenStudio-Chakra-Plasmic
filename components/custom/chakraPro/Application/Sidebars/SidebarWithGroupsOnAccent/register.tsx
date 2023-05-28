import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerSidebarWithGroupsOnAccent(){
    registerComponent(App, {
        name: "SidebarWithGroupsOnAccent",
        importPath: "./components/custom/chakraPro/Aplication/Sidebars/SidebarWithGroupsOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 