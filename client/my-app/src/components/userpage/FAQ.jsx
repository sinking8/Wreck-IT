import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';


const features = [{id: 1, title:"Who are we?" , text:"We are Team Gryffindor, a group of students based out of Chennai"},
{id: 2, title:"What is this about?" , text:"This is a place for all those who love to spot shipwrecks and want to add some of their own!"},
{id: 3, title:"What are shipwrecks actually?" , text:"Well, A shipwreck is the wreckage of a ship that is located either beached on land or sunken to the bottom of a body of water. Shipwrecking may be intentional or unintentional."},
{id: 4, title:"So what regions do you cover?" , text:"For now we cover the shipwrecks in the Asia-Pacific region with ideas of expanding throughout the globe!"},
{id: 5, title:"How do I add my own shipwreck data?" , text:"After logging in to the Dashboard, you can fill up our wreck in form and add to our database."},
{id: 6, title:"Does my data get added instantly?" , text:"Once we verify the authencity of your information, it will be published onto our database."},
{id: 7, title:"How authentic and accurate is the shipwreck data?" , text:"When an user adds details of a shipwreck, our team verifies the authencity of the data by requesting the users to give necessary proofs suppoprting their data. The data is accurate upto 1km from the marked location."},
{id: 8, title:"Customer Service" , text:"For any more queries, click on the chat icon below to talk directly to our representative."}
]
export default function FAQs() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>FAQs</Heading>
        <Text color={'gray.1000'} fontSize={'xl'}>
          These are some common queries that might arise while using our website.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={1000}>{feature.title}</Text>
                <Text color={'gray.1000'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}