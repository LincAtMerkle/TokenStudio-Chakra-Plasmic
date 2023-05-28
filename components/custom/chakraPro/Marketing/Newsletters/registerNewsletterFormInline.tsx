import { App }  from "./NewsletterFormInline";
import {registerComponent } from "@plasmicapp/host";

export function registerNewsletterFormInline(){
    registerComponent(App, {
        name: "NewsletterFormInline",
        importPath: "./components/custom/chakraPro/Marketing/Newsletters/NewsletterFormInline",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 