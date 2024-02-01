import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function SignIn() {
  const [show, setShow] = useState(false);
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();

  const handleFormSubmit = (data) => {
    setTimeout(() => {
      console.log('Form Data: ', data);
    }, 3000);
  }

  const handleShow = () => setShow(!show);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <VStack spacing={'.5rem'}>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor='email'>Username</FormLabel>
          <Input
            id='email'
            placeholder='Enter Email'
            {...register('email', {
              required: 'Email is required',
            })} />

          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <InputGroup>
            <Input
              id='password'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Minimum length should be 4' },
              })} />

            <InputRightElement width={'3.5rem'}>
              <Button h={'100%'} bg={'transparent'} size={'sm'} px={'10px'} onClick={handleShow}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>

          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <Button type='submit' width={'100%'} mt={'1rem'} isLoading={isSubmitting} colorScheme='blue'>
          Sign In
        </Button>
      </VStack>
    </form>
  )
}
