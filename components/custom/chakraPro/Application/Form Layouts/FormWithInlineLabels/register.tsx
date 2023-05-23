import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerFormWithInlineLabels(){
    registerComponent(App, {
        name: "FormWithInlineLabels",
        importPath: "./components/custom/chakraPro/FormWithInlineLabels",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 