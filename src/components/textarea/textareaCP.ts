import { mode, type StyleFunctionProps, transparentize } from '@chakra-ui/theme-tools'

const variants = {
  outline: (props: StyleFunctionProps) => ({
    border-radius: 'lg',
    bg: mode('white', 'gray.800')(props),
   &:hover: { border-color: mode('gray.300', 'gray.600')(props) },
   &:focus: {
      border-color: mode('brand.500', 'brand.200')(props),
      box-shadow: mode(
        `0px 0px 0px 1px ${transparentize(`brand.500`, 1.0)(props.theme)}`,
        `0px 0px 0px 1px ${transparentize(`brand.200`, 1.0)(props.theme)}`,
      )(props),
    },
  }),
}

export default {
  variants,
}
