import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerFormLayoutWithCards(){
    registerComponent(App, {
        name: "FormLayoutWithCards",
        importPath: "./components/custom/chakraPro/Cards/FormLayoutWithCards",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 