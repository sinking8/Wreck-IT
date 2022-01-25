import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server_URL } from '../../config/urls';

export default function Signupform() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, seterror] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const [signupform, setsignupform] = useState({
    first_name: '',
    last_name: '',
    email_id: '',
    password: '',
  });

  const params = new URLSearchParams();

  const delete_details = () => {
    params.delete('first_name');
    params.delete('last_name');
    params.delete('email_id');
    params.delete('password');
  };

  const handlesignup = () => {
    delete_details();
    params.append('first_name', signupform.first_name);
    params.append('last_name', signupform.last_name);
    params.append('email_id', signupform.email_id);
    params.append('password', signupform.password);
    axios.post(server_URL + 'signup', params).then(res => {
      if (res.data === true) {
        seterror(false);
        navigate('/login');
      } else {
        seterror(true);
        navigate('/signup');
      }
    });
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      {error ? (
        (toast({
          title: 'Error',
          description: 'Account already present',
          status: 'error',
          duration: 9000,
          position: 'top',
          isClosable: true,
        }),
        seterror(false))
      ) : (
        <div></div>
      )}
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.1000'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <form>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      value={signupform.first_name}
                      onChange={e =>
                        setsignupform({
                          ...signupform,
                          first_name: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      value={signupform.last_name}
                      onChange={e =>
                        setsignupform({
                          ...signupform,
                          last_name: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={signupform.email_id}
                  onChange={e =>
                    setsignupform({
                      ...signupform,
                      email_id: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={signupform.password}
                    onChange={e =>
                      setsignupform({
                        ...signupform,
                        password: e.target.value,
                      })
                    }
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword(showPassword => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handlesignup}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user?{' '}
                  <Link
                    color={'blue.400'}
                    onClick={() => {
                      navigate('/login');
                    }}
                  >
                    Login
                  </Link>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
