import { Rating } from '@chakra-ui-pro/rating/src/Rating'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'

export const ReviewForm = (props: React.ComponentProps<'form'>) => (
  <form {...props}>
    <Stack spacing="6">
      <FormControl id="name">
        <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Name</FormLabel>
        <Input
          name="name"
          placeholder="Your name"
          focusBorderColor={useColorModeValue('pink.500', 'pink.200')}
        />
      </FormControl>

      <FormControl id="email">
        <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Email</FormLabel>
        <Input
          name="email"
          type="email"
          placeholder="Your email address"
          focusBorderColor={useColorModeValue('pink.500', 'pink.200')}
        />
      </FormControl>

      <FormControl id="rating">
        <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Rating</FormLabel>
        <Rating defaultValue={2} size="xl" />
      </FormControl>

      <FormControl id="title">
        <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Title</FormLabel>
        <Input
          name="title"
          placeholder="Your title"
          focusBorderColor={useColorModeValue('pink.500', 'pink.200')}
        />
      </FormControl>

      <FormControl id="comment">
        <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Comment</FormLabel>
        <Textarea
          name="comment"
          placeholder="Your comment"
          rows={4}
          focusBorderColor={useColorModeValue('pink.500', 'pink.200')}
          resize="none"
        />
      </FormControl>

      <Button type="submit" colorScheme="pink" alignSelf="start" size="lg">
        Submit review
      </Button>
    </Stack>
  </form>
)
