import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerFooterWithSocialIcons(){
    registerComponent(App, {
        name: "FooterWithSocialIcons",
        importPath: "./components/chakra/chakraPro/Marketing/Footers/FooterWithSocialIcons",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 