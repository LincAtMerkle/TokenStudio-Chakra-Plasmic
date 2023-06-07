import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLoginWithGradient(){
    registerComponent(App, {
        name: "LoginWithGradient",
        importPath: "./components/chakra/chakraPro/Application/Authentication/LoginWithGradient",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 