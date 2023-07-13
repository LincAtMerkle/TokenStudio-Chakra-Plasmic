import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, type StyleFunctionProps } from '@chakra-ui/styled-system'

const { definePartsStyle } = createMultiStyleConfigHelpers(tabsAnatomy.keys)

type StyleFunctionPropsWithSize = StyleFunctionProps & { size: 'md' | 'lg' }

const sizes = {
  md: definePartsStyle({
    tab: {
      font-size: 'sm',
      line-height: '1.25rem',
      py: '2',
    },
  }),
  lg: definePartsStyle({
    tab: {
      font-size: 'md',
      py: '2.5',
    },
  }),
}

export const underline = definePartsStyle((props) => {
  const { orientation, size } = props as StyleFunctionPropsWithSize
  const isVertical = orientation === 'vertical'
  const borderProp = isVertical ? '	border-inline-start' : 'border-bottom'
  const marginProp = isVertical ? 'margin-inline-start' : 'margin-bottom'

  const sizeProps = sizes[size]

  const horizontalStyles = definePartsStyle({
    tab: {
      pt: '0',
      pb: '2.5',
      px: '1',
      justify-content: 'start',
    },
    tabList: {
     gap: '4',
    },
    indicator: {
      height: '0.5',
      margin-top: -0.5,
    },
  })

  const verticalStyles = definePartsStyle({
    tab: {
      justify-content: 'start',
      px: size === 'lg' ? '3.5' : '3',
    },
    tabList: {
     gap: '1',
    },
    indicator: {
      width: '0.5',
    },
  })

  return {
    tablist: {
      [borderProp]: '1px solid',
      border-color: 'inherit',
      ...(isVertical ? verticalStyles.tabList : horizontalStyles.tabList),
    },
    tab: {
      [marginProp]: '-1px',
      font-weight: 'semibold',
      color: 'fg.subtle',
      ...sizeProps.tab,
      &[data-selected]: {
        color: 'accent',
      },
      ...(isVertical ? verticalStyles.tab : horizontalStyles.tab),
    },
    indicator: {
      bg: 'accent',
      ...(isVertical ? verticalStyles.indicator : horizontalStyles.indicator),
    },
  }
})
