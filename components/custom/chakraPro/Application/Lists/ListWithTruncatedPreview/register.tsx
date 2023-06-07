import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerListWithTruncatedPreview(){
    registerComponent(App, {
        name: "ListWithTruncatedPreview",
        importPath: "./components/chakra/chakraPro/Aplication/Lists/ListWithTruncatedPreview",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 