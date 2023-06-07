import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerReviewQuickOverview(){
    registerComponent(App, {
        name: "ReviewQuickOverview",
        importPath: "./components/chakra/chakraPro/ReviewQuickOverview",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 