import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCustomSelect(){
    registerComponent(App, {
        name: "CustomSelect",
        importPath: "./components/custom/chakraPro//Form Layouts/Form Elements/CustomSelect",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 