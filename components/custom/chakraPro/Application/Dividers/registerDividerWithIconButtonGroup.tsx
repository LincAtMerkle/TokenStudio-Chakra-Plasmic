import { App }  from "./DividerWithIconButtonGroup";
import {registerComponent } from "@plasmicapp/host";

export function registerDividerWithIconButtonGroup(){
    registerComponent(App, {
        name: "DividerWithIconButtonGroup",
        importPath: "./components/custom/chakraPro/Application/Dividers/DividerWithIconButtonGroup",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 