import { chakra, TextProps } from '@chakra-ui/react'
import { ComponentProvider, wrapTokens } from "../tokensCtx";


// @ts-ignore TODO: fix types
const ChakraText = wrapTokens(chakra.p, "container");

export const Text = ({...props}: TextProps) => {
  return <ComponentProvider className={props.className} name="text"><ChakraText {...props} /></ComponentProvider>
}