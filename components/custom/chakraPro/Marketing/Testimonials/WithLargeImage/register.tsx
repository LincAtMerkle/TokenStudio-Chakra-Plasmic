import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerWithLargeImage(){
    registerComponent(App, {
        name: "WithLargeImage",
        importPath: "./components/chakra/chakraPro/Marketing/Team/WithLargeImage",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 