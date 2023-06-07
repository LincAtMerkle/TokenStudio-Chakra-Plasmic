import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerQuickViewWithHorizontalGallery(){
    registerComponent(App, {
        name: "QuickViewWithHorizontalGallery",
        importPath: "./components/chakra/chakraPro/QuickViewWithHorizontalGallery",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 