import { Box, Container, Stack, Tab, TabList, Tabs } from '@chakra-ui/react'

export const App = () => (
  <Box as="section" bg="bg-surface">
    <Container py={{ base: '4', md: '8' }}>
      <Stack spacing="24" direction="row" shouldWrapChildren>
        {['md', 'lg'].map((size) => (
          <Tabs key={size} size={size} variant="with-line" orientation="vertical">
            <TabList>
              <Tab>Home</Tab>
              <Tab>Components</Tab>
              <Tab>Pricing</Tab>
            </TabList>
          </Tabs>
        ))}
      </Stack>
    </Container>
  </Box>
)
