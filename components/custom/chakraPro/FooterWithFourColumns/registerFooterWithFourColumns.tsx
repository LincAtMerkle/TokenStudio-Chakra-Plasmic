import { FooterWithFourColumns }  from "./FooterWithFourColumns";
import {registerComponent } from "@plasmicapp/host";

export function registerFooterWithFourColumns(){
    registerComponent(FooterWithFourColumns, {
        name: "FooterWithFourColumns",
        importPath: "./components/chakraPro/FooterWithFourColumns",
        props: {
  },
});};
// 