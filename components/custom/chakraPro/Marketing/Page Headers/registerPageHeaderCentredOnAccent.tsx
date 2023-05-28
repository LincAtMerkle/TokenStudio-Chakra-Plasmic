import { App }  from "./PageHeaderCentredOnAccent";
import {registerComponent } from "@plasmicapp/host";

export function registerPageHeaderCentredOnAccent(){
    registerComponent(App, {
        name: "PageHeaderCentredOnAccent",
        importPath: "./components/custom/chakraPro/Marketing/Page Headers/PageHeaderCentredOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 