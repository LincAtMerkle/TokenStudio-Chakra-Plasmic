import { App }  from "./BannerWithButtonOnAccent";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithButtonOnAccent(){
    registerComponent(App, {
        name: "BannerWithButtonOnAccent",
        importPath: "./components/chakra/chakraPro/Application/Banner/BannerWithButtonOnAccent",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 