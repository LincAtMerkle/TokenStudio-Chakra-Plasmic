import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerUserCardWithRating(){
    registerComponent(App, {
        name: "UserCardWithRating",
        importPath: "./components/custom/chakraPro/Aplication/User Cards/UserCardWithRating",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 