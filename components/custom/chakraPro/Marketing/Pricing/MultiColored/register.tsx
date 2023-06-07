import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerMultiColored(){
    registerComponent(App, {
        name: "MultiColored",
        importPath: "./components/chakra/chakraPro/Marketing/Pricing/MultiColored",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 