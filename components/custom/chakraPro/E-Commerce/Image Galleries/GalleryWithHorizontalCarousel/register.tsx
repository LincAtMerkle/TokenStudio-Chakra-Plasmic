import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerGalleryWithHorizontalCarousel(){
    registerComponent(App, {
        name: "GalleryWithHorizontalCarousel",
        importPath: "./components/chakra/chakraPro/GalleryWithHorizontalCarousel",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 