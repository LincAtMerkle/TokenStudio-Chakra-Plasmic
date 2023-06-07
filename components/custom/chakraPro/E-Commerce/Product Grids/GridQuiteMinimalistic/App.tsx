import { Box, BoxProps, SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'
import { ProductCard } from './ProductCard'
import { products } from './_data'
import { ReactNode } from 'react';

export type AppProps = BoxProps & {
  children: ReactNode
}

export function App({
  className,
  children,
  ...rest
  }: AppProps) {
    return (
    <Box className={className}
    maxW="5xl"
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: '8', lg: '12' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  </Box>
)
}