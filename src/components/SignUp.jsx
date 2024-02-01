import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function SignUp() {
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const handleFormSubmit = (data) => {
    setTimeout(() => {
      console.log('Form Data: ', data);
    }, 3000);
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <VStack spacing={'.5rem'}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor='name'>Full Name</FormLabel>
          <Input
            id='name'
            placeholder='Enter Full Name'
            {...register('name', {
              required: "Name is Required."
            })} />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input
            id='email'
            placeholder='Enter Email'
            {...register('email', {
              required: "Email is required."
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
                required: "Password is required",
                minLength: { value: 8, message: 'Minimum length should be 8' }
              })} />

            <InputRightElement width={'3.5rem'} aria-hidden='true'>
              <Button h={'100%'} bg={'transparent'} size={'sm'} px={'10px'} onClick={handleShow}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.confPassword}>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              id='confPassword'
              type={show ? 'text' : 'password'}
              placeholder='Confirm password'
              {...register('confPassword', {
                required: "Confirm Password is required.",
                minLength: { value: 8, message: 'Minimum length should be 8' }
              })} />

            <InputRightElement width={'3.5rem'} aria-hidden='true'>
              <Button h={'100%'} bg={'transparent'} size={'sm'} px={'10px'} onClick={handleShow}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.confPassword && errors.confPassword.message}
          </FormErrorMessage>
        </FormControl>

        <Button type='submit' width={'100%'} mt={'1rem'} colorScheme='blue' isLoading={isSubmitting}>
          Sign Up
        </Button>
      </VStack>
    </form>
  )
}
