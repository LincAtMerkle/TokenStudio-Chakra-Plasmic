import {
  Avatar,
  AvatarBadge,
  Box,
  BoxProps,
  Center,
  HStack,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import { members } from './data'
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
    <Center className={className} maxW="sm" mx="auto" py={{ base: '4', md: '8' }}>
    <Box bg="bg-surface" py="4">
      <Stack divider={<StackDivider />} spacing="4">
        {members.map((member) => (
          <Stack key={member.id} fontSize="sm" px="4" spacing="4">
            <Stack direction="row" justify="space-between" spacing="4">
              <HStack spacing="3">
                <Avatar src={member.avatarUrl} boxSize="10">
                  <AvatarBadge boxSize="4" bg={member.status === 'active' ? 'success' : 'subtle'} />
                </Avatar>
                <Box>
                  <Text fontWeight="medium" color="emphasized">
                    {member.name}
                  </Text>
                  <Text color="muted">{member.handle}</Text>
                </Box>
              </HStack>
              <Text color="muted">{member.lastSeen}</Text>
            </Stack>
            <Text
              color="muted"
              sx={{
                '-webkit-box-orient': 'vertical',
                '-webkit-line-clamp': '2',
                overflow: 'hidden',
                display: '-webkit-box',
              }}
            >
              Candy donut tart pudding macaroon. Soufflé carrot cake choc late cake biscuit jelly
              beans chupa chups dragée. Cupcake toffee gummies lemon drops halvah. Cookie fruitcake
              jelly beans gingerbread soufflé marshmallow.
            </Text>
          </Stack>
        ))}
      </Stack>
    </Box>
  </Center>
)
}