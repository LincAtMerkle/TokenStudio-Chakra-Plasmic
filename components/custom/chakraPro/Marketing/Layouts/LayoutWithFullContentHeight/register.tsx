import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLayoutWithFullContentHeight(){
    registerComponent(App, {
        name: "LayoutWithFullContentHeight",
        importPath: "./components/chakra/chakraPro/Marketing/Layouts/LayoutWithFullContentHeight",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 