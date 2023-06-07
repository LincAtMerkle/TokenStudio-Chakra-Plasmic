import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerReviewDialog(){
    registerComponent(App, {
        name: "ReviewDialog",
        importPath: "./components/chakra/chakraPro/ReviewDialog",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 