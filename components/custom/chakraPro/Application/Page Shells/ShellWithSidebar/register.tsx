import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerShellWithSidebar(){
    registerComponent(App, {
        name: "ShellWithSidebar",
        importPath: "./components/chakra/chakraPro/Aplication/Page Shells/ShellWithSidebar",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 