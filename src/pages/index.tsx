
import { Button as ChakraButton } from '../components/button';
import { Button, DropdownMenu, Heading, Stack } from '@tokens-studio/ui'
import React from 'react';
import { ChakraBaseProvider } from '@chakra-ui/react'
import { ModifierProvider } from '../components/tokensCtx';

const Index = () => {


  const [color, setColor] = React.useState('light');


  const handleColorChange = (ev) => {
    const key = ev.currentTarget.dataset.key;
    setColor(key);
  }


  return <ChakraBaseProvider>
    <ModifierProvider modifiers={{ color }}>
      <Stack direction='column' gap={6} justify='center' align='center'>
        <Stack direction='row' gap={2}>
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="secondary" asDropdown size="medium">
                Color {color}
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content>
                <DropdownMenu.Item onClick={handleColorChange} data-key='light'>light</DropdownMenu.Item>
                <DropdownMenu.Item onClick={handleColorChange} data-key='dark'>dark</DropdownMenu.Item>
                <DropdownMenu.Item onClick={handleColorChange} data-key='light'>light</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu>
        </Stack>
        <Stack direction='row' justify='center'>
          <div style={{ background: 'beige', display: 'inline-block', padding: '1em' }}>
            <ChakraButton>Click Me </ChakraButton>
          </div>
        </Stack>

        <Heading>
          These buttons are only overwriting the color modifier, but should still be able to be affected by the type modifier
        </Heading>
        <Stack direction='row' gap={6} justify='center'>
          <ModifierProvider modifiers={{ color: 'light' }}>
            <ChakraButton>Click Me light</ChakraButton>
          </ModifierProvider>
          <ModifierProvider modifiers={{ color: 'dark' }}>
            <ChakraButton>Click Me dark</ChakraButton>
          </ModifierProvider>

        </Stack>
      </Stack>


    </ModifierProvider>


  </ChakraBaseProvider>

};

export default Index;
