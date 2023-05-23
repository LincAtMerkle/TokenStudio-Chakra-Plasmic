import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import { Navbar } from './Navbar'
import * as React from 'react'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'
import { Main } from './Main'

export const App = () => (
  <Flex direction="column" flex="1">
    <Navbar />
    <Container py="16" flex="1">
      <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '12', lg: '16' }} flex="1">
        <Main />
        <Sidebar />
      </Stack>
    </Container>
    <Footer />
  </Flex>
)
