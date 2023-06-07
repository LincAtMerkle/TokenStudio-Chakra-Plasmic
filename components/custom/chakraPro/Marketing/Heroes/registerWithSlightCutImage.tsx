import { App }  from "./WithSlightCutImage";
import {registerComponent } from "@plasmicapp/host";

export function registerWithSlightCutImage(){
    registerComponent(App, {
        name: "WithSlightCutImage",
        importPath: "./components/chakra/chakraPro/Marketing/Heroes/WithSlightCutImage",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 