import { Button, Flex, Heading, Input, Text, useColorMode, useColorModeValue, UnorderedList, Link, WrapItem, Image, Card } from "@chakra-ui/react";
import { redirect } from "next/dist/server/api-utils";

const background = `linear-gradient(90deg,#00aff0 50%,transparent 50.01%)`

export default function HomePage() {
  const { toggleColorMode } = useColorMode()
  const formBackGround = useColorModeValue("gray.100", "gray.700")
  return (
    <Card>
    <Flex height="80vh" alignItems="center"
     flex-direction="row" bg={background}>
      <Flex height="auto" width="100vh" justifyContent="center" alignItems="center">
          <Flex direction="column" justifyContent="center" height="30vh" width="30vh" mb={300} position="relative" top="50%" left="25%"> 
          <Flex>
          <Image
            boxSize='45px'
            src="/logoBen.svg"
            alt="logoOnlyFan"
            pt="10px"
            mt="5px"
            />
          <Heading mb={6} ml="6px" color='whiteAlpha.900' fontSize='45px' >OnlyCats</Heading>
          </Flex>
            <Text fontSize='35px' color='whiteAlpha.900' width="400px">Inscrivez-vous pour soutenir vos chats préférés</Text>
          </Flex>
          <Flex position="relative" top="150px" left="-350px">
            <Image
            boxSize={[125,225,325]}
            src="/LogoOnlyCats.png"
            alt="logo"
            />
          </Flex>
      </Flex>
      <Flex justifyContent="center" alignItems="center" height="100vh" width="100vh" mb={130}>
        <Flex direction="column" p={12} rounded={6} >
          <Heading mb={6} fontSize="25">Log in</Heading>
          <Input placeholder="example@email.com" variant="filled" mb={3} type="email" />
          <Input placeholder="*******" variant="filled" mb={6} type="password"/>
          <Button mb={6} rounded={20} textColor="white" bg="rgba(138,150,163,.75)" opacity=".4">Log in</Button>
          <Flex textAlign="center" justifyContent="center">
          <UnorderedList mb="2vh" display="inline-block" textAlign='left'>
            <Link mr="2vh" color="blue.400">Mot de passe oublié ?</Link>
            <Link color="blue.400">inscrivez-vous a onlyCats</Link>
          </UnorderedList>
          </Flex>
          <WrapItem mb="2vh" >

            <Button background="#0091ea" width="50vh" rounded={20} textColor="white">             
            {/* <Flex position="absolute" left="5">
              <Image
                boxSize="20px"
                src="/twitter.png"
                alt="logo"
                />
            </Flex> */}
            SE CONNECTER AVEC TWITTER</Button>
          </WrapItem>
          <WrapItem mb="2vh">
            <Button background="#4285f4" width="50vh" rounded={20} textColor="white">SE CONNECTER AVEC GOOGLE</Button>
          </WrapItem>
          <WrapItem mb="2vh">
            <Button bg="#2f2f2f" width="50vh" rounded={20} textColor="white">CONNEXION WINDOWS HELLO</Button>
          </WrapItem>
        </Flex>
      </Flex>
    </Flex> 
    </Card>
  )
}
