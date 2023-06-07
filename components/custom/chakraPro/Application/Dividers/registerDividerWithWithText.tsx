import { App }  from "./DividerWithWithText";
import {registerComponent } from "@plasmicapp/host";

export function registerDividerWithWithText(){
    registerComponent(App, {
        name: "DividerWithWithText",
        importPath: "./components/chakra/chakraPro/Application/Dividers/DividerWithWithText",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 