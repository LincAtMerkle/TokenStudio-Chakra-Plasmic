import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerShellWithSidebarOnAccent(){
    registerComponent(App, {
        name: "ShellWithSidebarOnAccent",
        importPath: "./components/chakra/chakraPro/Aplication/Page Shells/ShellWithSidebarOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 