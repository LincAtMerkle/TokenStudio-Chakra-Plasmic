import { App }  from "./BannerWithTextFloatingOnAccent";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithTextFloatingOnAccent(){
    registerComponent(App, {
        name: "BannerWithTextFloatingOnAccent",
        importPath: "./components/custom/chakraPro/Application/Banner/BannerWithTextFloatingOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 