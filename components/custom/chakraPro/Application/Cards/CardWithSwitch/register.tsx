import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCardWithSwitch(){
    registerComponent(App, {
        name: "CardWithSwitch",
        importPath: "./components/chakra/chakraPro/Application/Cards/CardWithSwitch",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 