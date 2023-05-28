import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerFooterWithFourColumnsOnAccent(){
    registerComponent(App, {
        name: "FooterWithFourColumnsOnAccent",
        importPath: "./components/custom/chakraPro/Marketing/Footers/FooterWithFourColumnsOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 