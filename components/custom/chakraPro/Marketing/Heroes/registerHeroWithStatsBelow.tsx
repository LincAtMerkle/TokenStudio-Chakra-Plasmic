import { App }  from "./HeroWithStatsBelow";
import {registerComponent } from "@plasmicapp/host";

export function registerHeroWithStatsBelow(){
    registerComponent(App, {
        name: "HeroWithStatsBelow",
        importPath: "./components/custom/chakraPro/Marketing/Heroes/HeroWithStatsBelow",
        
        props: {
          title: {
          type: "string",
          // defaultValue: "xxxxxxxx",
        },
  },
});};
// 