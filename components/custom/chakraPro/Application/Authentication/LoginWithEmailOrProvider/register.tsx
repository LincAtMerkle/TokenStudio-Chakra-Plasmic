import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLoginWithEmailOrProvider(){
    registerComponent(App, {
        name: "LoginWithEmailOrProvider",
        importPath: "./components/chakra/chakraPro/Application/Authentication/LoginWithEmailOrProvider",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 