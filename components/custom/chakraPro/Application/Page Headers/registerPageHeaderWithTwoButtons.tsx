import { App }  from "./PageHeaderWithTwoButtons";
import {registerComponent } from "@plasmicapp/host";

export function registerPageHeaderWithTwoButtons(){
    registerComponent(App, {
        name: "PageHeaderWithTwoButtons",
        importPath: "./components/custom/chakraPro/Aplication/Page Headers/Cards/PageHeaderWithTwoButtons",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 