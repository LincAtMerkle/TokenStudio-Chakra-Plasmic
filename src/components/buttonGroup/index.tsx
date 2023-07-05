import { ButtonGroupProps, ButtonGroup as ChakraButtonGroupComponent } from '@chakra-ui/react';
import { wrapTokens } from '../tokensCtx';

const Wrapped = wrapTokens(ChakraButtonGroupComponent, 'container');

export const ButtonGroup = (props: ButtonGroupProps) => {
  return (
      <Wrapped {...props} />
  );
};
