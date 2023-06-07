import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLogoGridWithTitleOnAccent(){
    registerComponent(App, {
        name: "LogoGridWithTitleOnAccent",
        importPath: "./components/chakra/chakraPro/Marketing/Logo Grid/LogoGridWithTitleOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 