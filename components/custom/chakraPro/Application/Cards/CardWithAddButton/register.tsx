import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCardWithAddButton(){
    registerComponent(App, {
        name: "CardWithAddButton",
        importPath: "./components/chakra/chakraPro/Application/Cards/CardWithAddButton",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 