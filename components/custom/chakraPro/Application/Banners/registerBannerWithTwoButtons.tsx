
import { App }  from "./BannerWithTwoButtons";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithTwoButtons(){
    registerComponent(App, {
        name: "BannerWithTwoButtons",
        importPath: "./components/custom/chakraPro/Application/Banner/BannerWithTwoButtons",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 