import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLoginWithFloatingLabel(){
    registerComponent(App, {
        name: "LoginWithFloatingLabel",
        importPath: "./components/custom/chakraPro/Application/Authentication/LoginWithFloatingLabel",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 