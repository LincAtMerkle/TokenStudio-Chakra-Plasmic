import { Logo } from "./Logo";
import { registerComponent } from '@plasmicapp/react-web/lib/host';
import {
  getPlasmicComponentName,
} from "../../../../../chakra/utils";


export function registerLogo() {
  registerComponent(Logo, {
    name: "Logo",
    importPath: "./components/chakra/chakraPro/Application/Authentication/LoginWithCentredForm",  
    props: {
      children: {
        type: 'slot',
        // defaultValue: 
        //   {},
      },
    },
  });
}
