import { ProductCallToActionTable }  from "./ProductCallToActionTable";
import {registerComponent } from "@plasmicapp/host";

export function registerProductCallToActionTable(){
    registerComponent(ProductCallToActionTable, {
        name: "ProductCallToActionTable",
        importPath: "./components/chakra/chakraPro/Application/Banner/ProductCallToActionTable",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 