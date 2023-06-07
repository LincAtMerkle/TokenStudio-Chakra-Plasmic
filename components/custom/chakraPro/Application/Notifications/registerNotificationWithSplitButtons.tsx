import { App }  from "./NotificationWithSplitButtons";
import {registerComponent } from "@plasmicapp/host";

export function registerNotificationWithSplitButtons(){
    registerComponent(App, {
        name: "NotificationWithSplitButtons",
        importPath: "./components/chakra/chakraPro/Aplication/Notifications/NotificationWithSplitButtons",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 