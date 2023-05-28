import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStateWithLabel(){
    registerComponent(App, {
        name: "StateWithLabel",
        importPath: "./components/custom/chakraPro/Aplication/Stats/StateWithLabel",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 