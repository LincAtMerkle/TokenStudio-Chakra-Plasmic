import { App }  from "./WithImageBackground";
import {registerComponent } from "@plasmicapp/host";

export function registerWithImageBackground(){
    registerComponent(App, {
        name: "WithImageBackground",
        importPath: "./components/chakra/chakraPro/Marketing/Heroes/WithImageBackground",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 