import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerGalleryWithVerticalCarousel(){
    registerComponent(App, {
        name: "GalleryWithVerticalCarousel",
        importPath: "./components/chakra/chakraPro/GalleryWithVerticalCarousel",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 