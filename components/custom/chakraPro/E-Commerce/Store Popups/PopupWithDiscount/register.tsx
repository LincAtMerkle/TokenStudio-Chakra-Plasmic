import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerPopupWithDiscount(){
    registerComponent(App, {
        name: "PopupWithDiscount",
        importPath: "./components/custom/chakraPro/PopupWithDiscount",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 