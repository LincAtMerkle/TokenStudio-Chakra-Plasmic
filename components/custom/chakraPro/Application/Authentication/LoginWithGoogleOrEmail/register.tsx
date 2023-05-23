import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLoginWithGoogleOrEmail(){
    registerComponent(App, {
        name: "LoginWithGoogleOrEmail",
        importPath: "./components/custom/chakraPro/Application/Authentication/LoginWithGoogleOrEmail",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 