import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerGridWithAddToCartButton(){
    registerComponent(App, {
        name: "GridWithAddToCartButton",
        importPath: "./components/custom/chakraPro/GridWithAddToCartButton",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 