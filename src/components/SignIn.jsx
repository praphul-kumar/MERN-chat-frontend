import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function SignIn() {
  const [show, setShow] = useState(false);

  const handleShowPassword = () => setShow(!show);

  return (
    <VStack spacing={'.5rem'}>
      <FormControl id='username' isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          placeholder='Enter Username'
          onChange={() => { }} />
      </FormControl>
      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
            onChange={() => { }} />

          <InputRightElement width={'3.5rem'}>
            <Button h={'100%'} bg={'transparent'} size={'sm'} px={'10px'} onClick={handleShowPassword}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button width={'100%'} mt={'1rem'} colorScheme='blue' variant='solid'>
        Sign In
      </Button>
    </VStack>
  )
}
