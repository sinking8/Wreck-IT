import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { server_URL } from '../../config/urls';

export default function Wreckinfo(): JSX.Element {
  const [error, seterror] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const [wreckform, setwreckform] = useState({
    latdec: '',
    londec: '',
    depth: '',
    feature_type: '',
    history: '',
    watlev: '',
  });

  const params = new URLSearchParams();

  const delete_details = () => {
    params.delete('latdec');
    params.delete('londec');
    params.delete('depth');
    params.delete('feature_type');
    params.delete('history');
    params.delete('watlev');
  };

  const handlewreck = () => {
    delete_details();
    params.append('latdec', parseFloat(wreckform.latdec));
    params.append('londec', parseFloat(wreckform.londec));
    params.append('depth', parseInt(wreckform.depth));
    params.append('feature_type', wreckform.feature_type);
    params.append('history', wreckform.history);
    params.append('watlev', wreckform.watlev);

    axios.post(server_URL + 'register_shipwreck', params).then(res => {
      if (res.data === true) {
        seterror(false);
      } else {
        seterror(true);
      }
      navigate('/user');
    });
  };

  return (
    <Flex
      minH={'100vh'}
      align={'Center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      position={'absolute'}
      left={'1200px'}
    >
      {error ? (
        (toast({
          title: 'Error',
          description: 'Error in uploading shipwreck info',
          status: 'error',
          duration: 9000,
          position: 'top',
          isClosable: true,
        }),
        seterror(false))
      ) : (
        <div></div>
      )}

      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          Wreck Info Form
        </Heading>
        <FormControl id="Name" isRequired>
          <FormLabel>Name:</FormLabel>
          <Input
            placeholder="Name"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="Location" isRequired>
          <FormLabel>Location:</FormLabel>
          <Input
            placeholder="Enter Location"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="Latitude" isRequired>
          <FormLabel>Latitude:</FormLabel>
          <Input
            placeholder="ex: 3.276533"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={e =>
              setwreckform({
                ...wreckform,
                latdec: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl id="Longitude" isRequired>
          <FormLabel>Longitude:</FormLabel>
          <Input
            placeholder="ex: -61.565292"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={e =>
              setwreckform({
                ...wreckform,
                londec: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl id="Wreckage Type" isRequired>
          <FormLabel>Wreckage Type:</FormLabel>
          <Input
            placeholder="ex: Broken/Visible"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={e =>
              setwreckform({
                ...wreckform,
                feature_type: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl id="History" isRequired>
          <FormLabel>History:</FormLabel>
          <Input
            placeholder="Related History"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={e =>
              setwreckform({
                ...wreckform,
                history: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl id="Depth" isRequired>
          <FormLabel>Depth:</FormLabel>
          <Input
            placeholder="Depth of Wreck"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={e =>
              setwreckform({
                ...wreckform,
                depth: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl id="Water Level" isRequired>
          <FormLabel>Water Level:</FormLabel>
          <Input
            placeholder="Water Level near wreck"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={e =>
              setwreckform({
                ...wreckform,
                watlev: e.target.value,
              })
            }
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
        <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
            onClick={handlewreck}
          >
            Submit
          </Button>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}
            onClick={() => {
              setwreckform({
                latdec: '',
                londec: '',
                depth: '',
                feature_type: '',
                history: '',
                watlev: '',
              });
            }}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
