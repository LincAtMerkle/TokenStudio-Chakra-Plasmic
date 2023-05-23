import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCardWithForm(){
    registerComponent(App, {
        name: "CardWithForm",
        importPath: "./components/custom/chakraPro/Application/Cards/CardWithForm",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 