import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerTeamWithSquarePhoto(){
    registerComponent(App, {
        name: "TeamWithSquarePhoto",
        importPath: "./components/chakra/chakraPro/Marketing/Team/TeamWithSquarePhoto",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 