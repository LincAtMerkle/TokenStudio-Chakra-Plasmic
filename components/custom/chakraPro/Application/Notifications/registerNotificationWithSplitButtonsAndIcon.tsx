import { App }  from "./NotificationWithSplitButtonsAndIcon";
import {registerComponent } from "@plasmicapp/host";

export function registerNotificationWithSplitButtonsAndIcon(){
    registerComponent(App, {
        name: "NotificationWithSplitButtonsAndIcon",
        importPath: "./components/custom/chakraPro/Aplication/Notifications/NotificationWithSplitButtonsAndIcon",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 