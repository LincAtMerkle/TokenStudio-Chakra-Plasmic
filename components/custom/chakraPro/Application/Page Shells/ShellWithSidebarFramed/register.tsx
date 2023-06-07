import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerShellWithSidebarFramed(){
    registerComponent(App, {
        name: "ShellWithSidebarFramed",
        importPath: "./components/chakra/chakraPro/Aplication/Page Shells/ShellWithSidebarFramed",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 