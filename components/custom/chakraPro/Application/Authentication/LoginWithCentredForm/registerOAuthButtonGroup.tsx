import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { registerComponent } from '@plasmicapp/react-web/lib/host';
import {
  getPlasmicComponentName,
} from "../../../../../chakra/utils";

export function registerOAuthButtonGroup() {
  registerComponent(OAuthButtonGroup, {
    name: "OAuthButtonGroup",
    importPath: "./components/chakra/chakraPro/Application/Authentication/LoginWithCentredForm",  
    props: {
      // children: {
      //   type: 'slot',
      //   // defaultValue: 
      //   //   {},
      // },
    },
  });
}
