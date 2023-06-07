import { App }  from "./BannerWithFormFloatingOnAccent";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithFormFloatingOnAccent(){
    registerComponent(App, {
        name: "BannerWithFormFloatingOnAccent",
        importPath: "./components/chakra/chakraPro/Application/Banner/BannerWithFormFloatingOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 