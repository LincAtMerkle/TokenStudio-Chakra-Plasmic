import { App }  from "./BannerWithButton";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithButton(){
    registerComponent(App, {
        name: "BannerWithButton",
        importPath: "./components/chakra/chakraPro/Application/Banner/BannerWithButton",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 