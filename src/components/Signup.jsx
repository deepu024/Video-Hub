import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const Signup = () => {
    return (
      <Container maxW={'container.xl'} p={'16'} h={'100vh'}>
        <form>
          <VStack
            alignItems={'stretch'}
            m="auto"
            w={['full', '96']}
            spacing={'8'}
            my={'16'}
          >
            <Heading>VIDEO HUB</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'}/>
            <Input
              required
              placeholder="Name"
              focusBorderColor="purple.500"
              type={'text'}
            />
            <Input
              required
              placeholder="Email"
              focusBorderColor="purple.500"
              type={'email'}
            />
            <Input
              required
              placeholder="Password"
              focusBorderColor="purple.500"
              type={'password'}
            />
            <Button colorScheme={'purple'} type="submit">
              Sign Up
            </Button>
            <Text textAlign={'right'}>
              Already User?{' '}
              <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
    
export default Signup;