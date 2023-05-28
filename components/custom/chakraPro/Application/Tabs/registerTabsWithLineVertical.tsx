import { App }  from "./TabsWithLineVertical";
import {registerComponent } from "@plasmicapp/host";

export function registerTabsWithLineVertical(){
    registerComponent(App, {
        name: "TabsWithLineVertical",
        importPath: "./components/custom/chakraPro/Application/Tabs/TabsWithLineVertical",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 