import { Box, Center, Heading, HStack, Image, SimpleGrid, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout';

export default function Contact() {

  const cards = [
    { url: 'https://instagram.com/conjured_tech', icon: 'instagram', text: 'conjured_tech' },
    { url: 'https://twitter.com/conjured_tech', icon: 'twitter', text: '@conjured_tech' },
    { url: 'https://reddit.com/u/conjured_tech', icon: 'reddit', text: 'u/conjured_tech' },
    { url: 'https://github.com/conjured-tech', icon: 'github', text: 'conjured_tech' },
    { url: 'mailto:conjured_tech@protonmail.com', icon: 'email', text: 'conjured_tech' },
  ]

  return (
    <Layout title='conjured tech | links'>
      <Center w='100%'>
        <VStack spacing={10}>

          <Image borderRadius='full'
            boxSize='100px' src={"https://avatars.githubusercontent.com/u/124994961?v=4"} />
          <SimpleGrid spacing={5}>

            {cards.map(card =>
              <Box _hover={{borderColor:'brand.100', color: 'brand.100'}} p={2} key={card.url} as={Link} href={card.url} target="_blank" rel="noreferrer" rounded='xl' border='1px solid white' w='100%'>
                <HStack>
                  <Image boxSize='40px' src={`/images/${card.icon}.svg`}/>
                  
                  <Heading pl={2} size='lg'>{card.text}</Heading>
                </HStack>
              </Box>
            )}
          </SimpleGrid>
        </VStack>
      </Center>
    </Layout>
  );
}