import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerProductWithCarousel(){
    registerComponent(App, {
        name: "ProductWithCarousel",
        importPath: "./components/custom/chakraPro/ProductWithCarousel",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 