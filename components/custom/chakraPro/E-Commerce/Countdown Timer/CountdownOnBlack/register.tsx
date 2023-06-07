import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCountdownOnBlack(){
    registerComponent(App, {
        name: "CountdownOnBlack",
        importPath: "./components/chakra/chakraPro/CountdownOnBlack",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 