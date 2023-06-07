import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerFooterWithLogoBelow(){
    registerComponent(App, {
        name: "FooterWithLogoBelow",
        importPath: "./components/chakra/chakraPro/Marketing/Footers/FooterWithLogoBelow",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 