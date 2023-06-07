import { App }  from "./TabsWithLine";
import {registerComponent } from "@plasmicapp/host";

export function registerTabsWithLine(){
    registerComponent(App, {
        name: "TabsWithLine",
        importPath: "./components/chakra/chakraPro/Application/Tabs/TabsWithLine",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 