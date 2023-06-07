import { App }  from "./PageHeaderCentredOnAccent";
import {registerComponent } from "@plasmicapp/host";

export function registerPageHeaderCentredOnAccent(){
    registerComponent(App, {
        name: "PageHeaderCentredOnAccent",
        importPath: "./components/chakra/chakraPro/Marketing/Page Headers/PageHeaderCentredOnAccent",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 