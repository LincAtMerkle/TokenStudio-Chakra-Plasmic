import { App }  from "./PageHeaderWithCallToActions";
import {registerComponent } from "@plasmicapp/host";

export function registerPageHeaderWithCallToActions(){
    registerComponent(App, {
        name: "PageHeaderWithCallToActions",
        importPath: "./components/chakra/chakraPro/Marketing/Page Headers/PageHeaderWithCallToActions",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 