import { App }  from "./CardWithDownloadItem";
import {registerComponent } from "@plasmicapp/host";

export function registerCardWithDownloadItem(){
    registerComponent(App, {
        name: "CardWithDownloadItem",
        importPath: "./components/custom/chakraPro/Application/Cards/CardWithDownloadItem",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 