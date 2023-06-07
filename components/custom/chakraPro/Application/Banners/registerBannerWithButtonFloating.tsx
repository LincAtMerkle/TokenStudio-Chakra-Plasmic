import { App }  from "./BannerWithButtonFloating";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithButtonFloating(){
    registerComponent(App, {
        name: "BannerWithButtonFloating",
        importPath: "./components/chakra/chakraPro/Application/Banner/BannerWithButtonFloating",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 