import {
  BoxProps,
} from "@chakra-ui/react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import { App as LoginWithCentredForm } from "./App";
import { registerComponent } from '@plasmicapp/react-web/lib/host';
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "../../../../../chakra/utils";

// export const loginWithCentredFormMeta: CodeComponentMeta<BoxProps> = {
//   ...getComponentNameAndImportMeta("LoginWithCentredForm"),
//   props: {
//     py: '12',
//     px: '0',
//   }
// }

export function registerLoginWithCentredForm(){    
registerComponent(LoginWithCentredForm, {
  name: 'LoginWithCentredForm',
  importPath: "./components/chakra/chakraPro/Application/Authentication/LoginWithCentredForm",  
  props: {
    children: {
    type: 'slot',
    defaultValue: [
      { type: "component", name: getPlasmicComponentName("Container"),
        props: {
          py: '12',
          px: '0',
        },
      },
    ],
  },
  }
});
}