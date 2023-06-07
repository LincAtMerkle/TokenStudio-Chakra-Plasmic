import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerReviewOverview(){
    registerComponent(App, {
        name: "ReviewOverview",
        importPath: "./components/chakra/chakraPro/ReviewOverview",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 