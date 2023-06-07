import { App }  from "./TabsWithLineVertical";
import {registerComponent } from "@plasmicapp/host";

export function registerTabsWithLineVertical(){
    registerComponent(App, {
        name: "TabsWithLineVertical",
        importPath: "./components/chakra/chakraPro/Application/Tabs/TabsWithLineVertical",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 