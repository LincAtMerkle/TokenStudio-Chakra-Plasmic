import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerTestimonialWithCurve(){
    registerComponent(App, {
        name: "TestimonialWithCurve",
        importPath: "./components/custom/chakraPro/Marketing/Team/TestimonialWithCurve",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 