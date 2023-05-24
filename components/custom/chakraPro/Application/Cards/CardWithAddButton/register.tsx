import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCardWithAddButton(){
    registerComponent(App, {
        name: "CardWithAddButton",
        importPath: "./components/custom/chakraPro/Application/Cards/CardWithAddButton",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 