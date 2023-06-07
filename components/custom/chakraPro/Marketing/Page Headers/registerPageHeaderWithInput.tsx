import { App }  from "./PageHeaderWithInput";
import {registerComponent } from "@plasmicapp/host";

export function registerPageHeaderWithInput(){
    registerComponent(App, {
        name: "PageHeaderWithInput",
        importPath: "./components/chakra/chakraPro/Marketing/Page Headers/PageHeaderWithInput",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 