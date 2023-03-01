import React from 'react';
import {
  Box,
  Heading,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function Navbar() {

  return (
    <Center py={8}>
      <Accordion allowToggle>
        <AccordionItem border='none' aria-label='Menu'>
          <AccordionButton >

            <Box className='stack' style={{ "--stacks": 3 }} _hover={{ cursor: 'pointer' }}>
              <Heading lineHeight='revert' size='2xl' style={{ "--index": 0 }}>@conjured_tech</Heading>
              <Heading lineHeight='revert' size='2xl' style={{ "--index": 1 }}>@conjured_tech</Heading>
              <Heading lineHeight='revert' size='2xl' style={{ "--index": 2 }}>@conjured_tech</Heading>
            </Box>
          </AccordionButton>

          <AccordionPanel>
            <UnorderedList py={4} fontSize='2xl' fontFamily='mono' textAlign='end' styleType='none'>
              <ListItem><Link href="/" passHref>home</Link></ListItem>
              <ListItem><Link href="/ramblings" passHref>ramblings</Link></ListItem>
              <ListItem><Link href="/resources" passHref>resources</Link></ListItem>
              <ListItem><Link href="/links" passHref>links</Link></ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Center >
  );
}
