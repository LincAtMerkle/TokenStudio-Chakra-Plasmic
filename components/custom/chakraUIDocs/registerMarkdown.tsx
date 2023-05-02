import Markdown from "./Markdown";
import {registerComponent } from "@plasmicapp/host";

export function registerMarkdown(){
    registerComponent(Markdown, {
        name: "Markdown",
        importPath: "./components/custom/chakraUIDocs/Markdown/",
        
        props: {
          markdown: {
          type: "string",
          control: "large"
        },
  },
});};
// 