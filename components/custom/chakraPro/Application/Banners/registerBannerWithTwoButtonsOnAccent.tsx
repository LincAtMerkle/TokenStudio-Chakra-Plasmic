import { App }  from "./BannerWithTwoButtonsOnAccent";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithTwoButtonsOnAccent(){
    registerComponent(App, {
        name: "BannerWithTwoButtonsOnAccent",
        importPath: "./components/chakra/chakraPro/Application/Banner/BannerWithTwoButtonsOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 