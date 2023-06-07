import { App }  from "./NewsletterFormInlineBoxed";
import {registerComponent } from "@plasmicapp/host";

export function registerNewsletterFormInlineBoxed(){
    registerComponent(App, {
        name: "NewsletterFormInlineBoxed",
        importPath: "./components/chakra/chakraPro/Marketing/Newsletters/NewsletterFormInlineBoxed",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 