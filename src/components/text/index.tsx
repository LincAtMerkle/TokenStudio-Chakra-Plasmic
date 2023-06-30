import { TextProps, Text as ChakraTextComponent } from '@chakra-ui/react';
import { wrapTokens } from '../tokensCtx';

const Wrapped = wrapTokens(ChakraTextComponent, 'container');

export const Text = ({ ...props }: TextProps) => {
  return <Wrapped {...props} />;
};
