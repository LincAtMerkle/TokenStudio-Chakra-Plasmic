import { App }  from "./NotificationWithAvatar";
import {registerComponent } from "@plasmicapp/host";

export function registerNotificationWithAvatar(){
    registerComponent(App, {
        name: "NotificationWithAvatar",
        importPath: "./components/chakra/chakraPro/Aplication/Notifications/NotificationWithAvatar",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 