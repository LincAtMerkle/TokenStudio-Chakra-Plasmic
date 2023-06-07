import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCartWithBottomSummary(){
    registerComponent(App, {
        name: "CartWithBottomSummary",
        importPath: "./components/chakra/chakraPro/CartWithBottomSummary",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 