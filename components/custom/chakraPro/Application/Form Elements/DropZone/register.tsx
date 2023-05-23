import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerDropZone(){
    registerComponent(App, {
        name: "DropZone",
        importPath: "./components/custom/chakraPro//Form Layouts/Form Elements/DropZone",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 