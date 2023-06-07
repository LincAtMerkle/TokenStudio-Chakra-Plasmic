import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerUserCardWithBackground(){
    registerComponent(App, {
        name: "UserCardWithBackground",
        importPath: "./components/chakra/chakraPro/Aplication/User Cards/UserCardWithBackground",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 