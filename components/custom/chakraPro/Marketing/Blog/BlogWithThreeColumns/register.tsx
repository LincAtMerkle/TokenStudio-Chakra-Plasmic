import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerBlogWithThreeColumns(){
    registerComponent(App, {
        name: "BlogWithThreeColumns",
        importPath: "./components/custom/chakraPro/Marketing/Blog/BlogWithThreeColumns",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 