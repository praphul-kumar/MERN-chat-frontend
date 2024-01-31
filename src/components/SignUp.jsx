import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { useState } from 'react'

export default function SignUp() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <VStack spacing={'.5rem'}>
      <FormControl id='name' isRequired>
        <FormLabel>Full Name</FormLabel>
        <Input
          placeholder='Enter Full Name'
          onChange={() => { }} />
      </FormControl>
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder='Enter Email'
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
            <Button h={'100%'} bg={'transparent'} size={'sm'} px={'10px'} onClick={handleShow}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id='conf-password' isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'}
            placeholder='Confirm password'
            onChange={() => { }} />

          <InputRightElement width={'3.5rem'}>
            <Button h={'100%'} bg={'transparent'} size={'sm'} px={'10px'} onClick={handleShow}>
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
