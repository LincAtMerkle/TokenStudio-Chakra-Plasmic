import { App }  from "./CardWithDownloadItem";
import {registerComponent } from "@plasmicapp/host";

export function registerCardWithDownloadItem(){
    registerComponent(App, {
        name: "CardWithDownloadItem",
        importPath: "./components/chakra/chakraPro/Application/Cards/CardWithDownloadItem",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 