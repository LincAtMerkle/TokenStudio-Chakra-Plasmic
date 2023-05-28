import { App }  from "./FeatureWithHeroImage";
import {registerComponent } from "@plasmicapp/host";

export function registerFeatureWithHeroImage(){
    registerComponent(App, {
        name: "FeatureWithHeroImage",
        importPath: "./components/custom/chakraPro/Marketing/Features/FeatureWithHeroImage",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 