import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCartWithDrawer(){
    registerComponent(App, {
        name: "CartWithDrawer",
        importPath: "./components/custom/chakraPro/CartWithDrawer",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 