import { App as LoginWithCentredForm } from "./App";
import { registerComponent } from '@plasmicapp/react-web/lib/host';
import {
  getPlasmicComponentName,
} from "../../../../../chakra/utils";


export function registerLoginWithCentredForm() {
  registerComponent(LoginWithCentredForm, {
    name: "LoginWithCentredForm",
    importPath: "./components/chakra/chakraPro/Application/Authentication/LoginWithCentredForm",  
    props: {
      children: {
        type: 'slot',
        defaultValue: 
          {
          type: 'component',
          name: getPlasmicComponentName('Container'),
          props: {
            children: {            
                type: 'component',
                name: getPlasmicComponentName('Stack'),
                props: {
                  children: [
                      {
                        type: 'component',
                        name: 'Logo',
                        props: {},
                      },
                      {
                        type: 'component',
                        name: getPlasmicComponentName('Stack'),
                        props: {
                          spacing: '8',
                          align: "center",
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
                                  {
                                    type: 'component',
                                    name: getPlasmicComponentName('HStack'),
                                    props: {
                                      spacing: '1',
                                      justify: 'center',
                                      children: [
                                        {
                                          type: 'component',
                                          name: getPlasmicComponentName('Text'),
                                          props: {
                                            // color: 'muted',
                                            children: {
                                              type: 'text',
                                              value: 'Don\'t have an account?',
                                            },
                                          },
                                        },
                                        {
                                          type: 'component',
                                          name: getPlasmicComponentName('Button'),
                                          props: {
                                            variant: 'link',
                                            colorScheme: 'pink',
                                            children: {
                                              type: 'text',
                                              value: 'Sign up',
                                            },
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: 'component',
                        name: getPlasmicComponentName('Box'),
                        props: {
                          py: '0',
                          px: '4', 
                          // boxShadow: 'none', 
                          // borderRadius: 'none', 
                          children: [
                            {
                              type: 'component',
                              name: getPlasmicComponentName('Stack'),
                              props: {
                                spacing: '6',
                                children: [
                                  {
                                    type: 'component',
                                    name: getPlasmicComponentName('Stack'),
                                    props: {
                                      spacing: '5',
                                      children: [
                                        {
                                          type: 'component',
                                          name: getPlasmicComponentName('FormControl'),
                                          props: {
                                            children: [
                                              {
                                                type: 'component',
                                                name: getPlasmicComponentName('FormLabel'),
                                                props: {
                                                  // htmlFor: 'email',
                                                  children: {
                                                    type: 'text',
                                                    value: 'Email',
                                                  },
                                                },
                                              },
                                              {
                                                type: 'component',
                                                name: getPlasmicComponentName('Input'),
                                                props: {
                                                  // id: 'email',
                                                  // type: 'email',
                                                },
                                              },
                                              {
                                                type: 'component',
                                                name: 'PasswordField',
                                                props: {},
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          type: 'component',
                                          name: getPlasmicComponentName('HStack'),
                                          props: {
                                            justify: 'space-between',
                                            children: [
                                              {
                                                type: 'component',
                                                name: getPlasmicComponentName('Checkbox'),
                                                props: {
                                                  // defaultChecked: true,
                                                },
                                              },
                                              {
                                                type: 'component',
                                                name: getPlasmicComponentName('Button'),
                                                props: {
                                                  variant: 'link',
                                                  colorScheme: 'pink',
                                                  size: 'sm',
                                                  children: {
                                                    type: 'text',
                                                    value: 'Forgot password?',
                                                  },
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    type: 'component',
                                    name: getPlasmicComponentName('Stack'),
                                    props: {
                                      spacing: '6',
                                      children: [
                                        {
                                          type: 'component',
                                          name: getPlasmicComponentName('Button'),
                                          props: {
                                            variant: 'primary',
                                            children: {
                                              type: 'text',
                                              value: 'Sign in',
                                            },
                                          },
                                        },
                                        {
                                          type: 'component',
                                          name: getPlasmicComponentName('HStack'),
                                          props: {
                                            children: [
                                              {
                                                type: 'component',
                                                name: getPlasmicComponentName('Divider'),
                                                props: {},
                                              },
                                              {
                                                type: 'component',
                                                name: getPlasmicComponentName('Text'),
                                                props: {
                                                  // fontSize: 'sm',
                                                  // whiteSpace: 'nowrap',
                                                  // color: 'muted',
                                                  children: {
                                                    type: 'text',
                                                    value: 'or continue with',
                                                  },
                                                },
                                              },
                                              {
                                                type: 'component',
                                                name: getPlasmicComponentName('Divider'),
                                         
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          type: 'component',
                                          name: 'OAuthButtonGroup',
                                         
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                },
              },
        },
      },
      },
    },
  });
}
