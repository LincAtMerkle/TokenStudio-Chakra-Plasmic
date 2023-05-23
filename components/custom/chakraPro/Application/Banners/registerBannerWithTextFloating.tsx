import { App }  from "./BannerWithTextFloating";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithTextFloating(){
    registerComponent(App, {
        name: "BannerWithTextFloating",
        importPath: "./components/custom/chakraPro/Application/Banner/BannerWithTextFloating",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 