import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerTableWithSearch(){
    registerComponent(App, {
        name: "TableWithSearch",
        importPath: "./components/chakra/chakraPro/Aplication/Tables/TableWithSearch",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 