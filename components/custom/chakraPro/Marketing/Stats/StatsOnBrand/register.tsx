import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStatsOnBrand(){
    registerComponent(App, {
        name: "StatsOnBrand",
        importPath: "./components/custom/chakraPro/Marketing/Stats/StatsOnBrand",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 