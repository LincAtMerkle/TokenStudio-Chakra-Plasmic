import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerFooterWithTwoColumnsOnAccent(){
    registerComponent(App, {
        name: "FooterWithTwoColumnsOnAccent",
        importPath: "./components/chakra/chakraPro/Marketing/Footers/FooterWithTwoColumnsOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 