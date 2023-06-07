import { App }  from "./NewsletterFormCentred";
import {registerComponent } from "@plasmicapp/host";

export function registerNewsletterFormCentred(){
    registerComponent(App, {
        name: "NewsletterFormCentred",
        importPath: "./components/chakra/chakraPro/Marketing/Newsletters/NewsletterFormCentred",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 