import { ButtonProps, Button as ChakraButtonComponent } from '@chakra-ui/react';
import { wrapTokens } from '../tokensCtx';

const Wrapped = wrapTokens(ChakraButtonComponent, 'container');

export const Button = (props: ButtonProps) => {
  return (
      <Wrapped {...props} />
  );
};
