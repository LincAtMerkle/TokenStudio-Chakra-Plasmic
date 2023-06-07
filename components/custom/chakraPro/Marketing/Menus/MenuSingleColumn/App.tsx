import {
  Button,
  Center,
  Container,
  ContainerProps,
  Icon,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import { items } from './data'
import { PopoverIcon } from './PopoverIcon'
import { ReactNode } from 'react';

export type AppProps = ContainerProps & {
  children: ReactNode
}

export function App({
  className,
  children,
  ...rest
  }: AppProps) {
  return (
    <Container 
    className={className} as="section" minH="2xl" py={{ base: '4', md: '5' }}>
    <Center>
      <Popover trigger="hover" isOpen={true} placement="bottom" gutter={12}>
        {({ isOpen }) => (
          <>
            <PopoverTrigger>
              <Button variant="link" rightIcon={<PopoverIcon isOpen={isOpen} />}>
                Resources
              </Button>
            </PopoverTrigger>
            <PopoverContent width="sm" p="5">
              <Stack>
                {items.map((item, id) => (
                  <Link variant="menu" href={item.href} key={id}>
                    <Stack spacing="4" direction="row" p="3">
                      <Icon as={item.icon} boxSize="6" color="accent" />
                      <Stack spacing="1">
                        <Text fontWeight="medium">{item.title}</Text>
                        <Text fontSize="sm" color="muted">
                          {item.description}
                        </Text>
                      </Stack>
                    </Stack>
                  </Link>
                ))}
              </Stack>
            </PopoverContent>
          </>
        )}
      </Popover>
    </Center>
  </Container>
)
                }