// registration.js

import { registerComponent } from '@plasmicapp/host';
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

export function App({
  className,
  children,
  ...rest
}: AppProps) {
  return (
    // Component implementation
  );
}

registerComponent(App, {
  name: 'App',
  props: {
    className: {
      type: 'string',
      defaultValue: '',
    },
    children: {
      type: 'slot',
      allowedComponents: ['Logo', 'Stack', 'Box', 'FormControl', 'FormLabel', 'Input', 'PasswordField', 'Checkbox', 'Button', 'Divider', 'Text', 'Heading', 'HStack', 'OAuthButtonGroup'],
      defaultValue: [
        {
          type: 'component',
          name: 'Logo',
          props: {},
        },
        {
          type: 'component',
          name: 'Stack',
          props: {
            spacing: '8',
            children: [
              {
                type: 'component',
                name: 'Stack',
                props: {
                  spacing: { base: '2', md: '3' },
                  textAlign: 'center',
                  children: [
                    {
                      type: 'component',
                      name: 'Heading',
                      props: {
                        size: { base: 'xs', md: 'sm' },
                        children: {
                          type: 'text',
                          value: 'Log in to your account',
                        },
                      },
                    },
                    {
                      type: 'component',
                      name: 'HStack',
                      props: {
                        spacing: '1',
                        justify: 'center',
                        children: [
                          {
                            type: 'component',
                            name: 'Text',
                            props: {
                              color: 'muted',
                              children: {
                                type: 'text',
                                value: 'Don\'t have an account?',
                              },
                            },
                          },
                          {
                            type: 'component',
                            name: 'Button',
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
          name: 'Box',
          props: {
            py: { base: '0', sm: '8' },
            px: { base: '4', sm: '10' },
            boxShadow: { base: 'none', sm: 'md' },
            borderRadius: { base: 'none', sm: 'xl' },
            children: [
              {
                type: 'component',
                name: 'Stack',
                props: {
                  spacing: '6',
                  children: [
                    {
                      type: 'component',
                      name: 'Stack',
                      props: {
                        spacing: '5',
                        children: [
                          {
                            type: 'component',
                            name: 'FormControl',
                            props: {
                              children: [
                                {
                                  type: 'component',
                                  name: 'FormLabel',
                                  props: {
                                    htmlFor: 'email',
                                    children: {
                                      type: 'text',
                                      value: 'Email',
                                    },
                                  },
                                },
                                {
                                  type: 'component',
                                  name: 'Input',
                                  props: {
                                    id: 'email',
                                    type: 'email',
                                  },
                                },
                              ],
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
                      name: 'HStack',
                      props: {
                        justify: 'space-between',
                        children: [
                          {
                            type: 'component',
                            name: 'Checkbox',
                            props: {
                              defaultChecked: true,
                              children: {
                                type: 'text',
                                value: 'Remember me',
                              },
                            },
                          },
                          {
                            type: 'component',
                            name: 'Button',
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
                    {
                      type: 'component',
                      name: 'Stack',
                      props: {
                        spacing: '6',
                        children: [
                          {
                            type: 'component',
                            name: 'Button',
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
                            name: 'HStack',
                            props: {
                              children: [
                                {
                                  type: 'component',
                                  name: 'Divider',
                                  props: {},
                                },
                                {
                                  type: 'component',
                                  name: 'Text',
                                  props: {
                                    fontSize: 'sm',
                                    whiteSpace: 'nowrap',
                                    color: 'muted',
                                    children: {
                                      type: 'text',
                                      value: 'or continue with',
                                    },
                                  },
                                },
                                {
                                  type: 'component',
                                  name: 'Divider',
                                  props: {},
                                },
                              ],
                            },
                          },
                          {
                            type: 'component',
                            name: 'OAuthButtonGroup',
                            props: {},
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
});
