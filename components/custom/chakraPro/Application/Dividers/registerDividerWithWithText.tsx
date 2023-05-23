import { App }  from "./DividerWithWithText";
import {registerComponent } from "@plasmicapp/host";

export function registerDividerWithWithText(){
    registerComponent(App, {
        name: "DividerWithWithText",
        importPath: "./components/custom/chakraPro/Application/Dividers/DividerWithWithText",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 