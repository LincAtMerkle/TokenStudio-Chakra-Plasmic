import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerTeamWithInlineHeadline(){
    registerComponent(App, {
        name: "TeamWithInlineHeadline",
        importPath: "./components/chakra/chakraPro/Marketing/Team/TeamWithInlineHeadline",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 