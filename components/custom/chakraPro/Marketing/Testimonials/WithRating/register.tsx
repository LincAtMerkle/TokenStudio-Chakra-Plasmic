import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerWithRating(){
    registerComponent(App, {
        name: "WithRating",
        importPath: "./components/custom/chakraPro/Marketing/Team/WithRating",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 