import {
  Box, 
  BoxProps,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FacebookIcon, TwitterIcon, WhatsAppIcon } from './SocialIcons'
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
    <Box 
    className={className} as="section" py={{ base: '4', md: '8' }}>
    <Container maxW="3xl">
      <Box
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius="lg"
        p={{ base: '4', md: '6' }}
      >
        <Stack spacing="5">
          <Stack spacing="1">
            <Text fontSize="lg" fontWeight="medium">
              Share Chakra UI with friends
            </Text>
            <Text fontSize="sm" color="muted">
              Email friends who have never tried Chakra UI
            </Text>
          </Stack>
          <Stack spacing="3" direction={{ base: 'column', sm: 'row' }}>
            <Button variant="secondary" leftIcon={<FacebookIcon boxSize="5" />} iconSpacing="3">
              Facebook
            </Button>
            <Button variant="secondary" leftIcon={<TwitterIcon boxSize="5" />} iconSpacing="3">
              Twitter
            </Button>
            <Button variant="secondary" leftIcon={<WhatsAppIcon boxSize="5" />} iconSpacing="3">
              WhatsApp
            </Button>
          </Stack>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing="3">
            <FormControl id="email" width={{ sm: 'auto' }}>
              <FormLabel>Send an invite</FormLabel>
              <Input type="email" placeholder="Your friends email" maxW={{ sm: 'xs' }} />
            </FormControl>
            <Button variant="primary" alignSelf={{ sm: 'flex-end' }}>
              Send
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  </Box>
)
}