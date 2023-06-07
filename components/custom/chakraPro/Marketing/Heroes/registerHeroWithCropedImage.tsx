import { App }  from "./HeroWithCropedImage";
import {registerComponent } from "@plasmicapp/host";

export function registerHeroWithCropedImage(){
    registerComponent(App, {
        name: "HeroWithCropedImage",
        importPath: "./components/chakra/chakraPro/Marketing/Heroes/HeroWithCropedImage",

        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 