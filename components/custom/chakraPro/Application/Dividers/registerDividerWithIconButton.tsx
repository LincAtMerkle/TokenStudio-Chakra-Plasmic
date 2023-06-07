import { App }  from "./DividerWithIconButton";
import {registerComponent } from "@plasmicapp/host";

export function registerDividerWithIconButton(){
    registerComponent(App, {
        name: "DividerWithIconButton",
        importPath: "./components/chakra/chakraPro/Application/Dividers/DividerWithIconButton",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 