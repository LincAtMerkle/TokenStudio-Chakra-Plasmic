import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerListWithAvatar(){
    registerComponent(App, {
        name: "ListWithAvatar",
        importPath: "./components/chakra/chakraPro/Aplication/Lists/ListWithAvatar",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 