import { App }  from "./CtaWithImage";
import {registerComponent } from "@plasmicapp/host";

export function registerCtaWithImage(){
    registerComponent(App, {
        name: "CtaWithImage",
        importPath: "./components/custom/chakraPro/Marketing/Call To Actions/registerCtaWithImage",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 