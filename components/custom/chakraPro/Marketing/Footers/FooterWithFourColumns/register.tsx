import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerFooterWithFourColumns(){
    registerComponent(App, {
        name: "FooterWithFourColumns",
        importPath: "./components/chakra/chakraPro/Marketing/Footers/FooterWithFourColumns",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 