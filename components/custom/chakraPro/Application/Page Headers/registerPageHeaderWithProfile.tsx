import { App }  from "./PageHeaderWithProfile";
import {registerComponent } from "@plasmicapp/host";

export function registerPageHeaderWithProfile(){
    registerComponent(App, {
        name: "PageHeaderWithProfile",
        importPath: "./components/custom/chakraPro/Aplication/Page Headers/Cards/PageHeaderWithProfile",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 