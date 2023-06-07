import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerGridWithFavouriteButton(){
    registerComponent(App, {
        name: "GridWithFavouriteButton",
        importPath: "./components/chakra/chakraPro/GridWithFavouriteButton",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 