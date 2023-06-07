import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLoginWithEmailPasswordOrGoogle(){
    registerComponent(App, {
        name: "LoginWithEmailPasswordOrGoogle",
        importPath: "./components/chakra/chakraPro/Application/Authentication/LoginWithEmailPasswordOrGoogle",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 