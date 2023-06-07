import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLogoGridWithTitle(){
    registerComponent(App, {
        name: "LogoGridWithTitle",
        importPath: "./components/chakra/chakraPro/Marketing/Logo Grid/LogoGridWithTitle",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 