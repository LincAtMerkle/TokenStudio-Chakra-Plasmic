import { App }  from "./CtaCentred";
import {registerComponent } from "@plasmicapp/host";

export function registerCtaCentred(){
    registerComponent(App, {
        name: "CtaCentred",
        importPath: "./components/chakra/chakraPro/Marketing/Call To Actions/registerCtaCentred",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 