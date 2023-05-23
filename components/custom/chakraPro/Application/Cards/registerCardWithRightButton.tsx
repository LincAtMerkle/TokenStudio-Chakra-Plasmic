import { App }  from "./CardWithRightButton";
import {registerComponent } from "@plasmicapp/host";

export function registerCardWithRightButton(){
    registerComponent(App, {
        name: "CardWithRightButton",
        importPath: "./components/custom/chakraPro/Application/Cards/CardWithRightButton",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 