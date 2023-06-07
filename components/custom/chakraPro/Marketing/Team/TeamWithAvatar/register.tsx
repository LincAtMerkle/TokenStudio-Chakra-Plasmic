import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerTeamWithAvatar(){
    registerComponent(App, {
        name: "TeamWithAvatar",
        importPath: "./components/chakra/chakraPro/Marketing/Team/TeamWithAvatar",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 