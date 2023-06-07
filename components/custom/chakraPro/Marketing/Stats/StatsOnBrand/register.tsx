import { App }  from "./App";
import {registerComponent } from "@plasmicapp/host";

export function registerStatsOnBrand(){
    registerComponent(App, {
        name: "StatsOnBrand",
        importPath: "./components/chakra/chakraPro/Marketing/Stats/StatsOnBrand",
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 