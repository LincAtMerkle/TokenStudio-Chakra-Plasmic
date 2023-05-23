import { App }  from "./BannerWithTwoButtonsFloatingOnAccent";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithTwoButtonsFloatingOnAccent(){
    registerComponent(App, {
        name: "BannerWithTwoButtonsFloatingOnAccent",
        importPath: "./components/custom/chakraPro/Application/Banner/BannerWithTwoButtonsFloatingOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 