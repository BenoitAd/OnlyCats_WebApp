import { Button, Flex, Heading, Input, Text, useColorMode, useColorModeValue, UnorderedList, Link, WrapItem, Image, Box } from "@chakra-ui/react";
import { redirect } from "next/dist/server/api-utils";


export default function Home() {
  const { toggleColorMode } = useColorMode()
  const formBackGround = useColorModeValue("gray.100", "gray.700")
  return (
    <Flex height="100vh" alignItems="center"  >
      <Flex background="blue.400" height="100vh" width="100vh" justifyContent="center" alignItems="center">
        <Flex direction="column" height="30vh" width="30vh" mb={300}> 
          <Heading mb={6} color='whiteAlpha.900' >OnlyBald</Heading>
          <Text fontSize='30px' color='whiteAlpha.900'>Inscrivez-vous pour soutenir vos chauves préférés</Text>
        </Flex>
        <Box position="fixed" left="70px" top="500px">
          <Image borderRadius='full'
            boxSize='350px'
            src="/logo.png"
            alt='oeuf'/>
        </Box>
      </Flex>
      <Flex justifyContent="center" alignItems="center" height="100vh" width="100vh" mb={130}>
        <Flex direction="column" p={12} rounded={6} >
          <Heading mb={6}>Log in</Heading>
          <Input placeholder="example@email.com" variant="filled" mb={3} type="email" />
          <Input placeholder="*******" variant="filled" mb={6} type="password"/>
          <Button mb={6} backgroundColor="gray.300" rounded={20} textColor="white">Log in</Button>
          <UnorderedList mb="2vh" pl="12">
            <Link mr="2vh" color="blue.400">Mot de passe oublié ?</Link>
            <Link color="blue.400">inscrivez-vous a onlyBald</Link>
          </UnorderedList>
          <WrapItem mb="2vh" >
            <Button  background="blue.400" width="50vh" rounded={20} textColor="white">SE CONNECTER AVEC TWITTER</Button>
          </WrapItem>
          <WrapItem mb="2vh">
            <Button background="blue.600" width="50vh" rounded={20} textColor="white">SE CONNECTER AVEC GOOGLE</Button>
          </WrapItem>
          <Button onClick={toggleColorMode} mb="2vh" >Toggle Color Mode</Button>
        </Flex>
      </Flex>
    </Flex> 
  )
}
