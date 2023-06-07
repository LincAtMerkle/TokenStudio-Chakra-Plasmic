import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerWithFeaturedLogos(){
    registerComponent(App, {
        name: "WithFeaturedLogos",
        importPath: "./components/chakra/chakraPro/Marketing/Footers/WithFeaturedLogos",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 