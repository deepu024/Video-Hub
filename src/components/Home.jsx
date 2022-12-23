import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p={16}>
        <Heading
          textTransform={'uppercase'}
          m={'auto'}
          py={2}
          width={'fit-content'}
          borderBottom={'2px solid'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={4}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['2', '16']}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt unde, tempora fuga vero quo, magnam ducimus itaque dignissimos dolore tempore nulla culpa nisi, totam distinctio esse similique deserunt provident sequi fugit quaerat ex recusandae. Officia, perferendis veniam. Quia, repudiandae aspernatur nostrum beatae quasi ducimus consequuntur at deserunt neque sapiente minus? Dolor blanditiis vel corporis necessitatibus ducimus labore corrupti, quasi reiciendis eligendi quas explicabo! Est iusto ipsum rerum vel alias excepturi a minus. Inventore omnis quae reprehenderit molestias repellendus tenetur nihil, quisquam ex pariatur eligendi nulla perspiciatis rerum eaque. Fuga quibusdam repellendus sunt dignissimos ut optio veniam in pariatur, voluptatibus dolor debitis earum quam repudiandae ducimus esse mollitia error? 
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '3xl',
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      interval={1000}
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} objectFit={['cover', 'none']} h={'full'} w={'full'}  />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch the Future
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img2} objectFit={['cover', 'none']} h={'full'} w={'full'} />
        <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
          Future is Gaming
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img3} objectFit={['cover', 'none']} h={'full'} w={'full'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming on console
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img4} objectFit={['cover', 'none']} h={'full'} w={'full'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Night life is Cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
