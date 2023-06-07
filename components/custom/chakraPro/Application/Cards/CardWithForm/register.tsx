import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCardWithForm(){
    registerComponent(App, {
        name: "CardWithForm",
        importPath: "./components/chakra/chakraPro/Application/Cards/CardWithForm",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 