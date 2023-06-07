import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerRating(){
    registerComponent(App, {
        name: "Rating",
        importPath: "./components/chakra/chakraPro/Rating",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 