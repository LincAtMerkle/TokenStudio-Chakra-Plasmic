import { App }  from "./BannerWithText";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithText(){
    registerComponent(App, {
        name: "BannerWithText",
        importPath: "./components/custom/chakraPro/Application/Banner/BannerWithText",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 