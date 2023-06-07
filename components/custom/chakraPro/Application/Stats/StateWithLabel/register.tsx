import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStateWithLabel(){
    registerComponent(App, {
        name: "StateWithLabel",
        importPath: "./components/chakra/chakraPro/Aplication/Stats/StateWithLabel",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 