import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

export default function LoginPage() {
  return (
    <div className="login-section">
      <Container maxW={'xl'} centerContent>
        <Box
          d="flex"
          justifyContent={'center'}
          alignItems={'center'}
          p={3}
          bg={'#f4f4f4'}
          w={'100%'}
          m="0 0 16px"
          borderRadius='lg' >
          <Text fontSize='2xl' align={'center'}>MERN Real Chat</Text>
        </Box>
        <Box
          w={'100%'}
          p={4}
          bg={'#f4f4f4'}
          borderRadius={'lg'}
        >
          <Tabs variant='soft-rounded'>
            <TabList mb={'1em'}>
              <Tab w={'50%'} textAlign={'center'}>Sign In</Tab>
              <Tab w={'50%'} textAlign={'center'}>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SignIn />
              </TabPanel>
              <TabPanel>
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  )
}
