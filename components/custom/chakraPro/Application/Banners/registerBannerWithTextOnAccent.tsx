import { App }  from "./BannerWithTextOnAccent";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithTextOnAccent(){
    registerComponent(App, {
        name: "BannerWithTextOnAccent",
        importPath: "./components/chakra/chakraPro/Application/Banner/BannerWithTextOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 