import React from 'react';
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Layout from '../../components/layout'
import { Button, Box, Text,  Heading, Image } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function Post({ post, allPosts }) {

  return (
    <Layout title={`conjured tech | ${post.title}`}>
      <Heading size='lg'>{post.title}</Heading>
      <Text py={4} fontSize='md' fontWeight={400} color='#CCCCCC'>{new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</Text>
      <Image src={post.coverImage} />
      <Box pb={10}>
        <ReactMarkdown className='markdown'>{post.content}</ReactMarkdown>
      </Box>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ])

  return {
    props: {
      allPosts,
      post: {
        ...post
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}