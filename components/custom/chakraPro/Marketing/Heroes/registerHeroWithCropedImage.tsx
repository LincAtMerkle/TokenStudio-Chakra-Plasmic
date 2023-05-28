import { App }  from "./HeroWithCropedImage";
import {registerComponent } from "@plasmicapp/host";

export function registerHeroWithCropedImage(){
    registerComponent(App, {
        name: "HeroWithCropedImage",
        importPath: "./components/custom/chakraPro/Marketing/Heroes/HeroWithCropedImage",

        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 