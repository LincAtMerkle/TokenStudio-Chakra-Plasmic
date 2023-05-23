import { App }  from "./NotificationWithTwoLinks";
import {registerComponent } from "@plasmicapp/host";

export function registerNotificationWithTwoLinks(){
    registerComponent(App, {
        name: "NotificationWithTwoLinks",
        importPath: "./components/custom/chakraPro/Aplication/Notifications/NotificationWithTwoLinks",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 