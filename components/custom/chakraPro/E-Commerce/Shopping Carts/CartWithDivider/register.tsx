import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCartWithDivider(){
    registerComponent(App, {
        name: "CartWithDivider",
        importPath: "./components/custom/chakraPro/CartWithDivider",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 