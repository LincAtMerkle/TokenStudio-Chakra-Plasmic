import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerTeamWithLargeImage(){
    registerComponent(App, {
        name: "TeamWithLargeImage",
        importPath: "./components/custom/chakraPro/Marketing/Team/TeamWithLargeImage",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 