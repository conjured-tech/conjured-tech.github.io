import { Box, Center, Heading, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout';
export default function Contact() {

  const resources = [
    { url: 'https://anonymousplanet.org/guide.html', text: "The Hitchhiker's Guide to Online Anonymity" },
  ]

  return (
    <Layout title='conjured tech | resources'>
      <Center>
        <VStack spacing={10}>

          <Heading fontWeight='light'>resources</Heading>
          <VStack spacing={6}>

            {resources.map(resource =>
              <Box _hover={{ borderColor: 'brand.100', color: 'brand.100' }} p={3} key={resource.url} as={Link} href={resource.url} target="_blank" rel="noreferrer">

                <Heading pl={2} size='md'>- {resource.text}</Heading>
              </Box>
            )}
          </VStack>
        </VStack>
      </Center>
    </Layout>
  );
}