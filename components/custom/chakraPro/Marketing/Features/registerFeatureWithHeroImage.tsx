import { App }  from "./FeatureWithHeroImage";
import {registerComponent } from "@plasmicapp/host";

export function registerFeatureWithHeroImage(){
    registerComponent(App, {
        name: "FeatureWithHeroImage",
        importPath: "./components/chakra/chakraPro/Marketing/Features/FeatureWithHeroImage",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 