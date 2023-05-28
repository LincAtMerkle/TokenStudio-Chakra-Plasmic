import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerShowcaseOnSpanningColumns(){
    registerComponent(App, {
        name: "ShowcaseOnSpanningColumns",
        importPath: "./components/custom/chakraPro/ShowcaseOnSpanningColumns",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 