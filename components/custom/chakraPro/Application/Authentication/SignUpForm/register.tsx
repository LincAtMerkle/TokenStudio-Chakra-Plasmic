import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerSignUpForm(){
    registerComponent(App, {
        name: "SignUpForm",
        importPath: "./components/custom/chakraPro/Application/Authentication/SignUpForm",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 