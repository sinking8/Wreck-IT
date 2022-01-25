import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { server_URL } from '../../config/urls';
import Footer from './footer';

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Center,
  Text,
  useToast,
} from '@chakra-ui/react';

import { useUserAuth } from '../../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const { googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const [login_form, update_login_form] = useState({
    email_id: '',
    password: '',
  });
  const [error, seterror] = useState(false);
  const toast = useToast();

  const params = new URLSearchParams();

  const handleGoogleSignIn = async e => {
    e.preventDefault();
    try {
      await googleSignIn();
      console.log('Logged In');
      navigate('/user');
    } catch (error) {
      console.log(error.message);
    }
  };
  const handle_login = () => {
    // Deleting prev entries
    params.delete('email_id');
    params.delete('password');
    // Adding new entries
    params.append('email_id', login_form.email_id);
    params.append('password', login_form.password);
    axios.post(server_URL + 'login', params).then(res => {
      console.log(res.data);
      if (res.data === true) {
        navigate('/user');
      } else {
        seterror(true);
        navigate('/home');
      }
    });
  };
  return (
    <div>
      {error ? (
        (toast({
          title: 'Error',
          description: 'Invalid Credentials',
          status: 'error',
          duration: 9000,
          position: 'top',
          isClosable: true,
        }),
        seterror(false))
      ) : (
        <div></div>
      )}
      <Stack minH={'90vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://c4.wallpaperflare.com/wallpaper/275/684/26/environment-underwater-ship-fish-shipwreck-hd-wallpaper-preview.jpg'
            }
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={7} w={'full'} maxW={'md'}>
            <Heading fontSize="38px">Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={login_form.email_id}
                onChange={e =>
                  update_login_form({ ...login_form, email_id: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={login_form.password}
                onChange={e =>
                  update_login_form({
                    ...login_form,
                    password: e.target.value,
                  })
                }
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link
                  color={'blue.500'}
                  onClick={() => {
                    navigate('/forgotpass');
                  }}
                >
                  Forgot password?
                </Link>
              </Stack>
              <Button
                colorScheme={'blue'}
                variant={'solid'}
                onClick={handle_login}
              >
                Sign in
              </Button>
              <Button
                w={'full'}
                variant={'outline'}
                leftIcon={<FcGoogle />}
                onClick={handleGoogleSignIn}
              >
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>

              <Button
                colorScheme={'green'}
                variant={'solid'}
                onClick={() => {
                  navigate('/signup');
                }}
              >
                Not a Member? Sign Up Now
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
      <Footer />
    </div>
  );
}
