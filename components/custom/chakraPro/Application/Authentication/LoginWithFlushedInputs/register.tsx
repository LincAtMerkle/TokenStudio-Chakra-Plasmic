import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLoginWithFlushedInputs(){
    registerComponent(App, {
        name: "LoginWithFlushedInputs",
        importPath: "./components/custom/chakraPro/Application/Authentication/LoginWithFlushedInputs",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 