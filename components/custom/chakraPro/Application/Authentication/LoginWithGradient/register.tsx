import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLoginWithGradient(){
    registerComponent(App, {
        name: "LoginWithGradient",
        importPath: "./components/custom/chakraPro/Application/Authentication/LoginWithGradient",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 