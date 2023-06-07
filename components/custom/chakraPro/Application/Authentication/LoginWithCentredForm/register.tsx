import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerLoginWithCentredForm(){
    registerComponent(App, {
        name: "LoginWithCentredForm",
        importPath: "./components/chakra/chakraPro/Application/Authentication/LoginWithCentredForm",
        props: {
          title: {
          type: "string",
          defaultValue: "xxxxxxxx",
        },
        children: {
          type: 'slot',
          // defaultValue: [
          //   {
          //     type: 'component',
          //     name: 'Stack',
          //     props: {

          //     }
          //   }
          // ]
        }
  },
});};
// 