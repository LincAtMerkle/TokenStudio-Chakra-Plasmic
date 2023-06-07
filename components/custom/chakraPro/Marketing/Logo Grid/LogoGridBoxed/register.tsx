import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLogoGridBoxed(){
    registerComponent(App, {
        name: "LogoGridBoxed",
        importPath: "./components/chakra/chakraPro/Marketing/Logo Grid/LogoGridBoxed",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 