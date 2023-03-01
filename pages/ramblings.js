import { Heading, VStack, Center } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/layout';
import RamblingCard from '../components/rambling-card';
import { getAllPosts } from '../lib/api';

export default function News({ allPosts }) {

  return (
    <Layout title='conjured tech | ramblings'>
      <Center>
        <VStack spacing={10}>

          <Heading fontWeight='light'>ramblings</Heading>
          {
            allPosts
              .map((nextPost, index) => (
                <RamblingCard type='alt' key={index} post={nextPost} />
              ))
          }
        </VStack>
      </Center>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}