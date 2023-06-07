import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerDividerWithRadioButtonGroup(){
    registerComponent(App, {
        name: "DividerWithRadioButtonGroup",
        importPath: "./components/chakra/chakraPro/Application/Dividers/DividerWithRadioButtonGroup",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 