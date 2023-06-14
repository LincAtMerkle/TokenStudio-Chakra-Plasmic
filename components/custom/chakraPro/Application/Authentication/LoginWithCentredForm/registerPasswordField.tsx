import { PasswordField } from "./PasswordField";
import { registerComponent } from '@plasmicapp/react-web/lib/host';
import {
  getPlasmicComponentName,
} from "../../../../../chakra/utils";

export function registerPasswordField() {
  registerComponent(PasswordField, {
    name: "PasswordField",
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
