import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerCustomSelect(){
    registerComponent(App, {
        name: "CustomSelect",
        importPath: "./components/chakra/chakraPro/Aplication/Form Elements/CustomSelect",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 