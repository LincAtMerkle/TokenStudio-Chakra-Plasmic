import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerTeamWithCard(){
    registerComponent(App, {
        name: "TeamWithCard",
        importPath: "./components/chakra/chakraPro/Marketing/Team/TeamWithCard",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 