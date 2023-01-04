import { Button, Flex, Heading, Input, Text, useColorMode, useColorModeValue, UnorderedList, Link, WrapItem, Image, Card } from "@chakra-ui/react";
import { redirect } from "next/dist/server/api-utils";
import { useSession, signIn, getProviders, signOut } from 'next-auth/react'

const background = `linear-gradient(90deg,#00aff0 50%,transparent 50.01%)`

export default function HomePage() {
  const { data:session } = useSession(); // session user

  const { toggleColorMode } = useColorMode()
  const formBackGround = useColorModeValue("gray.100", "gray.700")

  const handleSignOut = () => {
    signOut({redirect: false});
  }


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
            </Flex >
            <Flex width="375px" >
              <Text fontSize='32px' color='whiteAlpha.900' width="-moz-available">Inscrivez-vous pour soutenir vos chats préférés</Text>
            </Flex>
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
          { session ? 
          ( 
          <>
          <Heading mb={6} fontSize="25">You are logged as : <br/> {session.user?.email}</Heading> 
          <Button mb={6} rounded={20} textColor="white" bg="rgba(138,150,163,.75)" opacity=".4" onClick={handleSignOut} >Log out</Button>
          </>
          ) 
          : 
          (     
          <>
          <Heading mb={6} fontSize="25">Log in</Heading>
          <Input placeholder="example@email.com" variant="filled" mb={3} type="email" />
          <Input placeholder="*******" variant="filled" mb={6} type="password"/>
          <Button mb={6} rounded={20} textColor="white" bg="rgba(138,150,163,.75)" opacity=".4" onClick={() => signIn}>Log in</Button>
          <Flex textAlign="center" justifyContent="center">
          <UnorderedList mb="2vh" flex-direction="row" display="flex" text-align="justify">
            <Link mr="5px" color="blue.400" white-space="nowrap">Mot de passe oublié ?</Link>
            <Link ml="5px" color="blue.400" white-space="nowrap">inscrivez-vous a onlyCats</Link>
          </UnorderedList>
          </Flex>
          <WrapItem mb="2vh" >

            <Button display="block" w="100%" background="#0091ea" rounded={20} textColor="white">             
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
            <Button display="block" w="100%" background="#4285f4" rounded={20} textColor="white" >SE CONNECTER AVEC GOOGLE</Button>
          </WrapItem>
          <WrapItem mb="2vh">
            <Button display="block" w="100%" bg="#2f2f2f" rounded={20} textColor="white">SE CONNECTER AVEC GITHUB</Button>
          </WrapItem>
          </>   
          )
          }
        </Flex>
      </Flex>
    </Flex> 
    </Card>
  )
}
