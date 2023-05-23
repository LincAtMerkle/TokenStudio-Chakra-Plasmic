import { Rating } from '@chakra-ui-pro/rating/src/Rating'
import { Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Review } from './_data'

interface Props {
  review: Review
}

export const ReviewItem = (props: Props) => {
  const { review } = props
  return (
    <Stack>
      <Rating defaultValue={review.rating} size="sm" />
      <Text color={useColorModeValue('gray.600', 'gray.400')} fontSize="sm">
        by {review.author}, {review.createdAt}
      </Text>
      <Heading size="sm" fontWeight="medium">
        {review.title}
      </Heading>
      <Text>{review.comment}</Text>
    </Stack>
  )
}
