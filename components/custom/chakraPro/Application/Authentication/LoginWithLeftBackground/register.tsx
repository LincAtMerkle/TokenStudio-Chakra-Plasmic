import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLoginWithLeftBackground(){
    registerComponent(App, {
        name: "LoginWithLeftBackground",
        importPath: "./components/chakra/chakraPro/Application/Authentication/LoginWithLeftBackground",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 