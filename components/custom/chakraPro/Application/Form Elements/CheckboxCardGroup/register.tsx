import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCheckboxCardGroup(){
    registerComponent(App, {
        name: "CheckboxCardGroup",
        importPath: "./components/custom/chakraPro//Form Layouts/Form Elements/CheckboxCardGroup",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 