import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCountdownOnColoredBackground(){
    registerComponent(App, {
        name: "CountdownOnColoredBackground",
        importPath: "./components/custom/chakraPro/CountdownOnColoredBackground",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 