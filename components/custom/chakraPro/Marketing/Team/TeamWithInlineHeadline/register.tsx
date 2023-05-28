import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerTeamWithInlineHeadline(){
    registerComponent(App, {
        name: "TeamWithInlineHeadline",
        importPath: "./components/custom/chakraPro/Marketing/Team/TeamWithInlineHeadline",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 