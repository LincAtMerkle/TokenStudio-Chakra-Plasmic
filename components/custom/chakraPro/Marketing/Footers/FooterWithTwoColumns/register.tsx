import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerFooterWithTwoColumns(){
    registerComponent(App, {
        name: "FooterWithTwoColumns",
        importPath: "./components/chakra/chakraPro/Marketing/Footers/FooterWithTwoColumns",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 