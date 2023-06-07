import { App }  from "./CtaBoxed";
import {registerComponent } from "@plasmicapp/host";

export function registerCtaBoxed(){
    registerComponent(App, {
        name: "CtaBoxed",
        importPath: "./components/chakra/chakraPro/Marketing/Call To Actions/registerCtaBoxed",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 