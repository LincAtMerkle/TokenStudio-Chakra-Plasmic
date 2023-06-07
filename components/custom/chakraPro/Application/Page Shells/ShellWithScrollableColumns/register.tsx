import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerShellWithScrollableColumns(){
    registerComponent(App, {
        name: "ShellWithScrollableColumns",
        importPath: "./components/chakra/chakraPro/Aplication/Page Shells/ShellWithScrollableColumns",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 