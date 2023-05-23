import { App }  from "./BannerWithButtonOnAccent";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithButtonOnAccent(){
    registerComponent(App, {
        name: "BannerWithButtonOnAccent",
        importPath: "./components/custom/chakraPro/Application/Banner/BannerWithButtonOnAccent",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 