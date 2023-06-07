import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerFooterWithSocialIconsOnAccent(){
    registerComponent(App, {
        name: "FooterWithSocialIconsOnAccent",
        importPath: "./components/chakra/chakraPro/FooterWithSocialIconsOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 