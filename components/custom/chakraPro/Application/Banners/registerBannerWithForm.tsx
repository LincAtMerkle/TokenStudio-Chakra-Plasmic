import { App }  from "./BannerWithForm";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithForm(){
    registerComponent(App, {
        name: "BannerWithForm",
        importPath: "./components/chakra/chakraPro/Application/Banner/BannerWithForm",        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 