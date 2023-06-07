import { App }  from "./BannerWithButtonFloatingOnAccent";
import {registerComponent } from "@plasmicapp/host";

export function registerBannerWithButtonFloatingOnAccent(){
    registerComponent(App, {
        name: "BannerWithButtonFloatingOnAccent",
        importPath: "./components/chakra/chakraPro/Application/Banner/BannerWithButtonFloatingOnAccent",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 