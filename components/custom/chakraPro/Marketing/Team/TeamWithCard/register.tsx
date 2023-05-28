import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerTeamWithCard(){
    registerComponent(App, {
        name: "TeamWithCard",
        importPath: "./components/custom/chakraPro/Marketing/Team/TeamWithCard",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 