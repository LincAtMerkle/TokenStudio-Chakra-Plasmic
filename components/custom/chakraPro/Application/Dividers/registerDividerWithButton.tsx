import { App }  from "./DividerWithButton";
import {registerComponent } from "@plasmicapp/host";

export function registerDividerWithButton(){
    registerComponent(App, {
        name: "DividerWithButton",
        importPath: "./components/custom/chakraPro/Application/Dividers/DividerWithButton",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 