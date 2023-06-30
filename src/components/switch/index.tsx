import { SwitchProps, Switch as ChakraSwitchComponent } from '@chakra-ui/react';
import { wrapTokens } from '../tokensCtx';

const Wrapped = wrapTokens(ChakraSwitchComponent, 'container');

export const Switch = (props: SwitchProps) => {
  return <Wrapped {...props} />;
};
