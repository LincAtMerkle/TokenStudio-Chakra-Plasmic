import { App }  from "./ShowcaseOnColoredBackground";
import {registerComponent } from "@plasmicapp/host";

export function registerShowcaseOnColoredBackground(){
    registerComponent(App, {
        name: "ShowcaseOnColoredBackground",
        importPath: "./components/custom/chakraPro/E-Commerce/Category Showcases/registerShowcaseOnColoredBackground",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 