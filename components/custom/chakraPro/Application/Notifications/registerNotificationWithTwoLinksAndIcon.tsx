import { App }  from "./NotificationWithTwoLinksAndIcon";
import {registerComponent } from "@plasmicapp/host";

export function registerNotificationWithTwoLinksAndIcon(){
    registerComponent(App, {
        name: "NotificationWithTwoLinksAndIcon",
        importPath: "./components/chakra/chakraPro/Aplication/Notifications/NotificationWithTwoLinksAndIcon",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 