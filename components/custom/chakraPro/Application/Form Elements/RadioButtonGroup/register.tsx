import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerRadioButtonGroup(){
    registerComponent(App, {
        name: "RadioButtonGroup",
        importPath: "./components/chakra/chakraPro/Aplication/Form Elements/RadioButtonGroup",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 