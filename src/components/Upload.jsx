import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container p={'16'} height={'100vh'} maxW={'container.xl'}>
      <VStack height={'full'} color={'purple.500'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <form>
            <HStack>
                <Input type={'file'} required css={{
                    "&::file-selector-button" : {
                        border: 'none',
                        height: '100%',
                        width: 'calc(100% + 36px)',
                        marginLeft: '-18px',
                        color: 'purple',
                        backgroundColor: 'white',
                    }
                }}/>
                <Button type='submit' colorScheme={'purple'}>Upload</Button>
            </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
