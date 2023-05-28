import { App }  from "./NewsletterFormCentredBoxed";
import {registerComponent } from "@plasmicapp/host";

export function registerNewsletterFormCentredBoxed(){
    registerComponent(App, {
        name: "NewsletterFormCentredBoxed",
        importPath: "./components/custom/chakraPro/Marketing/Newsletters/NewsletterFormCentredBoxed",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 