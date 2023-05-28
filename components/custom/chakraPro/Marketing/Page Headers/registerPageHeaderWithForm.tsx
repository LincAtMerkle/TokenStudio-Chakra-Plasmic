import { App }  from "./PageHeaderWithForm";
import {registerComponent } from "@plasmicapp/host";

export function registerPageHeaderWithForm(){
    registerComponent(App, {
        name: "PageHeaderWithForm",
        importPath: "./components/custom/chakraPro/Marketing/Page Headers/PageHeaderWithForm",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 