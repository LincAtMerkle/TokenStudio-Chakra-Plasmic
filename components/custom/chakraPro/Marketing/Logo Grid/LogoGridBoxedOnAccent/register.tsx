import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLogoGridBoxedOnAccent(){
    registerComponent(App, {
        name: "LogoGridBoxedOnAccent",
        importPath: "./components/custom/chakraPro/Marketing/Logo Grid/LogoGridBoxedOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 