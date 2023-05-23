import { Box, Container, Stack, Tab, TabList, Tabs } from '@chakra-ui/react'

export const App = () => (
  <Box as="section" bg="bg-surface">
    <Container py={{ base: '4', md: '8' }}>
      <Stack spacing="16">
        {['md', 'lg'].map((size) => (
          <Tabs key={size} size={size} variant="with-line">
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
