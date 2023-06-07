import { App }  from "./FeatureWithHeroImageOnAccent";
import {registerComponent } from "@plasmicapp/host";

export function registerFeatureWithHeroImageOnAccent(){
    registerComponent(App, {
        name: "FeatureWithHeroImageOnAccent",
        importPath: "./components/chakra/chakraPro/Marketing/Features/FeatureWithHeroImageOnAccent",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 