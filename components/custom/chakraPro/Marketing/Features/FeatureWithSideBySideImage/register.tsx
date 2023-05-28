import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerFeatureWithSideBySideImage(){
    registerComponent(App, {
        name: "FeatureWithSideBySideImage",
        importPath: "./components/custom/chakraPro/Marketing/Features/FeatureWithSideBySideImage",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 