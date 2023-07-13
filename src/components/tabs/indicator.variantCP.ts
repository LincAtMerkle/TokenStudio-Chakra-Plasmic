import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, type StyleFunctionProps } from '@chakra-ui/styled-system'

const { definePartsStyle } = createMultiStyleConfigHelpers(tabsAnatomy.keys)

type StyleFunctionPropsWithSize = StyleFunctionProps & { size: 'md' | 'lg' }

const sizes = {
  md: definePartsStyle({
    tab: {
      font-size: 'sm',
      line-height: '1.25rem',
    },
    tablist: {
      px: '1',
     gap: '2',
      h: '11',
    },
    indicator: {
      h: '9',
      margin-top: '-10',
    },
  }),
  lg: definePartsStyle({
    tab: {
      font-size: 'md',
    },
    tablist: {
      px: '1.5',
     gap: '2',
      h: '14',
    },
    indicator: {
      h: '11',
      margin-top: '-50px',
    },
  }),
}

export const indicator = definePartsStyle((props) => {
  const { size } = props as StyleFunctionPropsWithSize
  const sizeProps = sizes[size]

  return {
    tablist: {
      ...sizeProps.tablist,
      border-radius: 'lg',
      border-width: '1px',
      bg: 'bg.subtle',
    },
    tab: {
      ...sizeProps.tab,
      color: 'fg.subtle',
      font-weight: 'semibold',
      z-index: 1,
      &[data-selected]: {
        color: 'fg.emphasized',
      },
    },
    indicator: {
      ...sizeProps.indicator,
      border-radius: 'md',
      box-shadow: 'xs',
      bg: 'white',
      .chakra-ui-dark &: {
        bg: 'gray.700',
      },
    },
  }
})
