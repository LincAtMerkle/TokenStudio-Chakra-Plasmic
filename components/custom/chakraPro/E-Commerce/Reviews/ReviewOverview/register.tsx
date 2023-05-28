import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerReviewOverview(){
    registerComponent(App, {
        name: "ReviewOverview",
        importPath: "./components/custom/chakraPro/ReviewOverview",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 