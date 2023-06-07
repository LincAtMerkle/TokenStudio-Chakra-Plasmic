import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerPopupWithImage(){
    registerComponent(App, {
        name: "PopupWithImage",
        importPath: "./components/chakra/chakraPro/PopupWithImage",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 