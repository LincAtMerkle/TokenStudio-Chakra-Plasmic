import { App } from "./App";
import { registerComponent } from '@plasmicapp/react-web/lib/host';
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "../../../../../chakra/utils";
import { ReactNode } from 'react';

export interface AppProps {
  className?: string;
  children?: ReactNode;
  maxW?: string;
  py?: {
    base?: string;
    md?: string;
  };
  px?: {
    base?: string;
    sm?: string;
  };
}

export function registerLoginWithCentredForm() {
  registerComponent(App, {
    name: "LoginWithCentredForm",
    importPath:
      "./components/chakra/chakraPro/Application/Authentication/LoginWithCentredForm",
      props: {
        className: {
          type: 'string',
          defaultValue: '',
        },
        children: {
          type: 'slot',
          // allowedComponents: ['Logo', 'Stack', 'Box', 'FormControl', 'FormLabel', 'Input', 'PasswordField', 'Checkbox', 'Button', 'Divider', 'Text', 'Heading', 'HStack', 'OAuthButtonGroup'],
          defaultValue: [
            // {
            //   type: 'component',
            //   name: getPlasmicComponentName('Logo'),
            //   props: {},
            // },
            {
              type: 'component',
              name: getPlasmicComponentName('Stack'),
              props: {
                spacing: '8',
                children: [
                  {
                    type: 'component',
                    name: getPlasmicComponentName('Stack'),
                    props: {
                      spacing: '20',
                      children: [
                        {
                          type: 'component',
                          name: getPlasmicComponentName('Heading'),
                          props: {
                            size: '20',
                            children: {
                              type: 'text',
                              value: 'Log in to your account',
                            },
                          },
                        },
                        // {
                        //   type: 'component',
                        //   name: getPlasmicComponentName('HStack'),
                        //   props: {
                        //     spacing: '1',
                        //     justify: 'center',
                        //     children: [
                        //       {
                        //         type: 'component',
                        //         name: getPlasmicComponentName('Text'),
                        //         props: {
                        //           color: 'muted',
                        //           children: {
                        //             type: 'text',
                        //             value: 'Don\'t have an account?',
                        //           },
                        //         },
                        //       },
                        //       {
                        //         type: 'component',
                        //         name: getPlasmicComponentName('Button'),
                        //         props: {
                        //           variant: 'link',
                        //           colorScheme: 'pink',
                        //           children: {
                        //             type: 'text',
                        //             value: 'Sign up',
                        //           },
                        //         },
                        //       },
                        //     ],
                        //   },
                        // },
                      ],
                    },
                  },
                ],
              },
            },
            // {
            //   type: 'component',
            //   name: getPlasmicComponentName('Box'),
            //   props: {
            //     py: '0',
            //     px: '4', 
            //     boxShadow: 'none', 
            //     borderRadius: 'none', 
            //     children: [
            //       {
            //         type: 'component',
            //         name: getPlasmicComponentName('Stack'),
            //         props: {
            //           spacing: '6',
            //           children: [
            //             {
            //               type: 'component',
            //               name: getPlasmicComponentName('Stack'),
            //               props: {
            //                 spacing: '5',
            //                 children: [
            //                   {
            //                     type: 'component',
            //                     name: getPlasmicComponentName('FormControl'),
            //                     props: {
            //                       children: [
            //                         {
            //                           type: 'component',
            //                           name: getPlasmicComponentName('FormLabel'),
            //                           props: {
            //                             htmlFor: 'email',
            //                             children: {
            //                               type: 'text',
            //                               value: 'Email',
            //                             },
            //                           },
            //                         },
            //                         {
            //                           type: 'component',
            //                           name: getPlasmicComponentName('Input'),
            //                           props: {
            //                             id: 'email',
            //                             type: 'email',
            //                           },
            //                         },
            //                         {
            //                           type: 'component',
            //                           name: getPlasmicComponentName('PasswordField'),
            //                           props: {},
            //                         },
            //                       ],
            //                     },
            //                   },
            //                   {
            //                     type: 'component',
            //                     name: getPlasmicComponentName('HStack'),
            //                     props: {
            //                       justify: 'space-between',
            //                       children: [
            //                         {
            //                           type: 'component',
            //                           name: getPlasmicComponentName('Checkbox'),
            //                           props: {
            //                             defaultChecked: true,
            //                           },
            //                         },
            //                         {
            //                           type: 'component',
            //                           name: getPlasmicComponentName('Button'),
            //                           props: {
            //                             variant: 'link',
            //                             colorScheme: 'pink',
            //                             size: 'sm',
            //                             children: {
            //                               type: 'text',
            //                               value: 'Forgot password?',
            //                             },
            //                           },
            //                         },
            //                       ],
            //                     },
            //                   },
            //                 ],
            //               },
            //             },
            //             {
            //               type: 'component',
            //               name: getPlasmicComponentName('Stack'),
            //               props: {
            //                 spacing: '6',
            //                 children: [
            //                   {
            //                     type: 'component',
            //                     name: getPlasmicComponentName('Button'),
            //                     props: {
            //                       variant: 'primary',
            //                       children: {
            //                         type: 'text',
            //                         value: 'Sign in',
            //                       },
            //                     },
            //                   },
            //                   {
            //                     type: 'component',
            //                     name: getPlasmicComponentName('HStack'),
            //                     props: {
            //                       children: [
            //                         {
            //                           type: 'component',
            //                           name: getPlasmicComponentName('Divider'),
            //                           props: {},
            //                         },
            //                         {
            //                           type: 'component',
            //                           name: getPlasmicComponentName('Text'),
            //                           props: {
            //                             fontSize: 'sm',
            //                             whiteSpace: 'nowrap',
            //                             color: 'muted',
            //                             children: {
            //                               type: 'text',
            //                               value: 'or continue with',
            //                             },
            //                           },
            //                         },
            //                         {
            //                           type: 'component',
            //                           name: getPlasmicComponentName('Divider'),
            //                           props: {},
            //                         },
            //                       ],
            //                     },
            //                   },
            //                   {
            //                     type: 'component',
            //                     name: getPlasmicComponentName('OAuthButtonGroup'),
            //                     props: {},
            //                   },
            //                 ],
            //               },
            //             },
            //           ],
            //         },
            //       },
            //     ],
            //   },
            // },
          ],
        },
      },
  });
}
