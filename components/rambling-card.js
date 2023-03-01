import React from 'react';
import {
  Box,
  Text,
  VStack,
  Heading,
} from '@chakra-ui/react';
import Link from 'next/dist/client/link';

function RamblingCard({ post }) {
  return (
    <Link href={`/ramblings/${encodeURIComponent(post.slug)}`}>
      <Box w='90vw' maxW='380px' border='2px outset whitesmoke' padding={2}>
        <VStack textAlign='right'>
          <Heading w='100%' size='sm' color='brand.300'>{post.title}</Heading>
          <Text fontSize='sm' w='100%'>
            {new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
          </Text>
          <Text fontStyle='italic' wordBreak='break-word' w='100%' fontSize={16} fontWeight={400}>{post.excerpt.slice(0, 150)}{post.excerpt.length > 150 && "..."}</Text>
        </VStack>
      </Box>
    </Link>
  )
}

export default RamblingCard;
