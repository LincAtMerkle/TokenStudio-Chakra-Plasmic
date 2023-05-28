import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerBlogWithHeroImage(){
    registerComponent(App, {
        name: "BlogWithHeroImage",
        importPath: "./components/custom/chakraPro/Marketing/Blog/BlogWithHeroImage",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 