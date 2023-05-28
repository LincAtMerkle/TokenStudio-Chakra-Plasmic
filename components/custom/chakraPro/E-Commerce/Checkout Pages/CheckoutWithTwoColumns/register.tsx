import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCheckoutWithTwoColumns(){
    registerComponent(App, {
        name: "CheckoutWithTwoColumns",
        importPath: "./components/custom/chakraPro/CheckoutWithTwoColumns",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 