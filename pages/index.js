import React from 'react';
import {
  Heading,
  Container,
  SlideFade,
  Center,
} from '@chakra-ui/react';
import Layout from '../components/layout';

export default function Index({ allPosts }) {
  const [animation, setAnimation] = React.useState(false)
  const [animation2, setAnimation2] = React.useState(false)
  const [animation3, setAnimation3] = React.useState(false)
  setTimeout(() => setAnimation(true), 2000)
  setTimeout(() => setAnimation2(true), 3000)
  setTimeout(() => setAnimation3(true), 4000)
  return (
    <Layout title='conjured tech' >
      <Center h='65vh'>

        <Container maxW='400px'>

          <SlideFade in={animation} direction='left' offsetX='-400'>
            <Heading py={8} fontWeight='light' fontStyle='italic' size='lg'>we live in a twilight world</Heading>
          </SlideFade>
          <SlideFade in={animation2} direction='right' offsetX='-400'>
            <Heading pb={8} textAlign='center' fontWeight='light' fontStyle='italic' size='lg'>~</Heading>
          </SlideFade>
          <SlideFade in={animation3} direction='right' offsetX='-400'>
            <Heading pb={8} textAlign='right' fontWeight='light' fontStyle='italic' size='lg'>there are no friends at dusk</Heading>
          </SlideFade>

        </Container>
      </Center>
    </Layout>
  );
}