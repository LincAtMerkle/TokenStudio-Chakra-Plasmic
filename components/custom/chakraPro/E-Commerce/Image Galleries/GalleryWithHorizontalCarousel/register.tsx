import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerGalleryWithHorizontalCarousel(){
    registerComponent(App, {
        name: "GalleryWithHorizontalCarousel",
        importPath: "./components/custom/chakraPro/GalleryWithHorizontalCarousel",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 