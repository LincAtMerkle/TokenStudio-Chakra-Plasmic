import { App }  from "./BannerWithFormFloating";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithFormFloating(){
    registerComponent(App, {
        name: "BannerWithFormFloating",
        importPath: "./components/chakra/chakraPro/Application/Banner/BannerWithFormFloating",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 