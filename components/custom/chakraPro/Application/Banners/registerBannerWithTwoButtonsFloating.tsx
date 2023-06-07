import { App }  from "./BannerWithTwoButtonsFloating";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithTwoButtonsFloating(){
    registerComponent(App, {
        name: "BannerWithTwoButtonsFloating",
        importPath: "./components/chakra/chakraPro/Application/Banner/BannerWithTwoButtonsFloating",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 