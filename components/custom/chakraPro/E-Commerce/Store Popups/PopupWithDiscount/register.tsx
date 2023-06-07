import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerPopupWithDiscount(){
    registerComponent(App, {
        name: "PopupWithDiscount",
        importPath: "./components/chakra/chakraPro/PopupWithDiscount",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 