import { App }  from "./FloatingInputLabel";
import {registerComponent } from "@plasmicapp/host";

export function registerFloatingInputLabel(){
    registerComponent(App, {
        name: "FloatingInputLabel",
        importPath: "./components/custom/chakraPro/Aplication/Form Elements/FloatingInputLabel",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 