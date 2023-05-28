import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLogoGridWithTiles(){
    registerComponent(App, {
        name: "LogoGridWithTiles",
        importPath: "./components/custom/chakraPro/Marketing/Logo Grid/LogoGridWithTiles",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 