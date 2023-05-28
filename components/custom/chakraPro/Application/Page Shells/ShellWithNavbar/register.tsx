import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerShellWithNavbar(){
    registerComponent(App, {
        name: "ShellWithNavbar",
        importPath: "./components/custom/chakraPro/Aplication/Page Shells/Cards/ShellWithNavbar",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 