import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerSignUpWithQuote(){
    registerComponent(App, {
        name: "SignUpWithQuote",
        importPath: "./components/custom/chakraPro/Application/Authentication/SignUpWithQuote",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 