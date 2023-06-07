import { ProductOverviewTable }  from "./ProductOverviewTable";
import {registerComponent } from "@plasmicapp/host";

export function registerProductOverviewTable(){
    registerComponent(ProductOverviewTable, {
        name: "ProductOverviewTable",
        importPath: "./components/chakra/chakraPro/Application/Banner/ProductOverviewTable",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 