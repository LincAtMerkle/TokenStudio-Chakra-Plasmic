import { App }  from "./PageHeaderCentred";
import {registerComponent } from "@plasmicapp/host";

export function registerPageHeaderCentred(){
    registerComponent(App, {
        name: "PageHeaderCentred",
        importPath: "./components/chakra/chakraPro/Marketing/Page Headers/PageHeaderCentred",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 