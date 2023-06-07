import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerWithChatBubble(){
    registerComponent(App, {
        name: "WithChatBubble",
        importPath: "./components/chakra/chakraPro/Marketing/Team/WithChatBubble",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 