import { FooterWithFourColumns }  from "./FooterWithFourColumns";
import {registerComponent } from "@plasmicapp/host";

export function registerFooterWithFourColumns(){
    registerComponent(FooterWithFourColumns, {
        name: "FooterWithFourColumns",
        importPath: "./components/custom/FooterWithFourColumns",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
        footer: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        }
  },
});};
// 