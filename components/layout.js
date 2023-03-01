import React from 'react';
import Head from 'next/head'
import {
  Container,
} from '@chakra-ui/react';
import Navbar from './navbar';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title}
        </title>
        <link rel="icon" href="/images/logo.webp" />
      </Head>

      <Container maxW='1000px' pb={10}>
        <Navbar />
        {children}
      </Container>
    </>
  );
}