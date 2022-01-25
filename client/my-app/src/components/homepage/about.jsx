import { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';

export default function About() {
  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('https://images4.alphacoders.com/812/thumb-1920-81268.jpg')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Shipwrecks
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                What is this place?
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                Yes, you read that right! This is a website for locating shipwrecks around the world. I know its not for everyone but for the right people, A shipwreck is a treasure trove!! So all you wreck lovers out there, Hop right in!
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={'white'}
                    mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: 'Shipwrecks Map',
    content: (
      <>
        <StatsText>A comprehensive map</StatsText> dotted with shipwreck sites plotted using
        real-time data.
      </>
    ),
  },
  {
    title: 'Shipwreck Info Form',
    content: (
      <>
        <StatsText>By providing simple details</StatsText> about any shipwreck you might know, you can contribute to our database. We'll write back after verifying your data.
      </>
    ),
  },
  {
    title: 'Know your wreck',
    content: (
      <>
        <StatsText>Detailed Information</StatsText> about each and every shipwreck site will be provided when you click on its map location.
      </>
    ),
  },
  {
    title: 'Live Chat',
    content: (
      <>
        <StatsText>Have any Questions?</StatsText> Just click on the chat icon and ask away!
      </>
    ),
  },
];