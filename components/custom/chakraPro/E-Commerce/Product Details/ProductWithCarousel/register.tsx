import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerProductWithCarousel(){
    registerComponent(App, {
        name: "ProductWithCarousel",
        importPath: "./components/chakra/chakraPro/ProductWithCarousel",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 