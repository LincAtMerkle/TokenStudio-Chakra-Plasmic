import { ButtonPreview }  from "./ButtonPreview";
import {registerComponent } from "@plasmicapp/host";

export function registerButtonPreview(){
    registerComponent(ButtonPreview, {
        name: "ButtonPreview",
        importPath: "./components/custom/ButtonPreview",
        props: {
  },
});};
// 