import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerProductWithLargeImages(){
    registerComponent(App, {
        name: "ProductWithLargeImages",
        importPath: "./components/chakra/chakraPro/ProductWithLargeImages",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 