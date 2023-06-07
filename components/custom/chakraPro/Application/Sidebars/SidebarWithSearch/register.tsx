import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerSidebarWithSearch(){
    registerComponent(App, {
        name: "SidebarWithSearch",
        importPath: "./components/chakra/chakraPro/Aplication/Sidebars/SidebarWithSearch",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 