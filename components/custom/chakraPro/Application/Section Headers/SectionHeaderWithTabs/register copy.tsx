import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLoginWithCentredForm(){
    registerComponent(App, {
        name: "LoginWithCentredForm",
        importPath: "./components/chakra/chakraPro/Aplication/Section Headers/LoginWithCentredForm",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 