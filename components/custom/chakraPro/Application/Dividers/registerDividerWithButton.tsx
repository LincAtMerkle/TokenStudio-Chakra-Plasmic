import { App }  from "./DividerWithButton";
import {registerComponent } from "@plasmicapp/host";

export function registerDividerWithButton(){
    registerComponent(App, {
        name: "DividerWithButton",
        importPath: "./components/chakra/chakraPro/Application/Dividers/DividerWithButton",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 