import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerBlogWithSingleColumn(){
    registerComponent(App, {
        name: "BlogWithSingleColumn",
        importPath: "./components/custom/chakraPro/Marketing/Blog/BlogWithSingleColumn",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 