import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerUserCardGrid(){
    registerComponent(App, {
        name: "UserCardGrid",
        importPath: "./components/custom/chakraPro/Aplication/User Cards/UserCardGrid",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 