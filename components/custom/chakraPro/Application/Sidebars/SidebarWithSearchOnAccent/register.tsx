import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerSidebarWithSearchOnAccent(){
    registerComponent(App, {
        name: "SidebarWithSearchOnAccent",
        importPath: "./components/chakra/chakraPro/Aplication/Sidebars/SidebarWithSearchOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 