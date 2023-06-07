import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCheckboxCardGroup(){
    registerComponent(App, {
        name: "CheckboxCardGroup",
        importPath: "./components/chakra/chakraPro/Aplication/Form Elements/CheckboxCardGroup",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 