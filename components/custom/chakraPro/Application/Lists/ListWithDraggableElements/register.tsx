import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerListWithDraggableElements(){
    registerComponent(App, {
        name: "ListWithDraggableElements",
        importPath: "./components/chakra/chakraPro/Aplication/Lists/ListWithDraggableElements",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 