import { mode, transparentize, type StyleFunctionProps } from '@chakra-ui/theme-tools'

const baseStyle = (props: StyleFunctionProps) => ({
  border-width: '1px',
  border-radius: 'lg',
  p: '4',
  bg: 'bg.surface',
  transitionProperty: 'common',
  transitionDuration: 'normal',
 &:hover: { border-color: mode('gray.300', 'gray.600')(props) },
  &[data-checked]: {
    border-color: mode('brand.500', 'brand.200')(props),
    box-shadow: mode(
      `0px 0px 0px 1px ${transparentize(`brand.500`, 1.0)(props.theme)}`,
      `0px 0px 0px 1px ${transparentize(`brand.200`, 1.0)(props.theme)}`,
    )(props),
  },
})

export default {
  baseStyle,
}
