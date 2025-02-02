import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerFooterWithLogoBelowOnAccent(){
    registerComponent(App, {
        name: "FooterWithLogoBelowOnAccent",
        importPath: "./components/chakra/chakraPro/Marketing/Footers/FooterWithLogoBelowOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 