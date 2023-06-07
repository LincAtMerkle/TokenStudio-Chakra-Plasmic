import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerFormWithInlineLabels(){
    registerComponent(App, {
        name: "FormWithInlineLabels",
        importPath: "./components/chakra/chakraPro/FormWithInlineLabels",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 