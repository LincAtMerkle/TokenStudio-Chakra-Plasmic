import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerUserCardWithTags(){
    registerComponent(App, {
        name: "UserCardWithTags",
        importPath: "./components/custom/chakraPro/Aplication/User Cards/UserCardWithTags",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 