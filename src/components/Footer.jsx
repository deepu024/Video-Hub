import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={40} p={16} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w="full" px="4">
          <Heading size={'md'} textAlign={['center', 'left']}>SUBSCRIBE TO GET UPDATE</Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email Here"
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={0}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
            <Heading textTransform={'uppercase'} textAlign="center">Video hub</Heading>
            <Text>All right reserved</Text>
        </VStack>

        <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>Links</Heading>
            <Button variant={'link'} color={'white'}>
                <Link to={'#'}>LeetCode</Link>
            </Button>
            <Button variant={'link'} color={'white'}>
                <Link to={'#'}>Github</Link>
            </Button>
            <Button variant={'link'} color={'white'}>
                <Link to={'#'}>GFG</Link>
            </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
