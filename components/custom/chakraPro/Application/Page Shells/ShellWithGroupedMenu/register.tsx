import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerShellWithGroupedMenu(){
    registerComponent(App, {
        name: "ShellWithGroupedMenu",
        importPath: "./components/custom/chakraPro/Aplication/Page Shells/ShellWithGroupedMenu",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 