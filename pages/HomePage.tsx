import { Button, Flex, Heading, Input, Text, useColorMode, useColorModeValue, UnorderedList, Link, WrapItem, Image, Card, Box, VStack, ChakraBaseProvider } from "@chakra-ui/react";
import { redirect } from "next/dist/server/api-utils";
import { useSession, signIn, getProviders, signOut } from 'next-auth/react'
import { BsGithub, BsGoogle, BsTwitter } from 'react-icons/bs'
import chakra from "@chakra-ui/react";
import { useState } from "react";

const background = `linear-gradient(90deg,#00aff0 50%,transparent 50.01%)`

export default function HomePage() {
  const { data:session } = useSession(); // session user
  const [email, setEmail] = useState(''); // email user
  const [password, setPassword] = useState(''); // password user

  const { toggleColorMode } = useColorMode()
  const formBackGround = useColorModeValue("gray.100", "gray.700")


  const handleSignOut = () => {
    signOut({redirect: false});
  }

  type provider = { 
    name: string,
    Icon: any
    background?: string
  }

  const providers = [
    {
      name: 'google',
      Icon: BsGoogle,
      background:"#DB4437"
      
    } as provider,
    {
      name: 'github',
      Icon: BsGithub,
      background:"#2f2f2f"
    } as provider,
    {
      name: 'twitter',
      Icon: BsTwitter,
      background:"#0091ea"
    } as provider,  
  ] as provider[]

  const handleOAuthSignIn = (provider:string) => () => signIn(provider)

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if(!email) return false;

    signIn('email', {email, redirect: false})
  }
  


  return (
    <>
    <Card>
      <Flex height="80vh" alignItems="center" flex-direction="row" bg={background}>
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
                    <Input placeholder="example@email.com" variant="filled" mb={3} type="email" onChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder="*******" variant="filled" mb={6} type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Button mb={6} rounded={20} textColor="white" bg="rgba(138,150,163,.75)" opacity=".4" onSubmit={handleSubmit}>Log in</Button>
                    <Flex textAlign="center" justifyContent="center">
                      <UnorderedList mb="2vh" flex-direction="row" display="flex" text-align="justify">
                        <Link mr="5px" color="blue.400" white-space="nowrap">Mot de passe oublié ?</Link>
                        <Link ml="5px" color="blue.400" white-space="nowrap">inscrivez-vous a onlyCats</Link>
                      </UnorderedList>
                    </Flex>
                    <Box mb="2vh" textAlign="center">
                      <VStack>
                        {providers.map(({name,Icon,background}) => (
                            <Button 
                            key={name}  
                            leftIcon={<Icon />}
                            bg={background}
                            display="block" 
                            w="100%" 
                            rounded={20} 
                            textColor="white" 
                            onClick={handleOAuthSignIn(name)}
                            >
                              SIGN IN WITH {name.toUpperCase()}
                            </Button>
                          ))
                        }
                      </VStack>
                    </Box>
              </>
              )
            }
          </Flex>
        </Flex>
      </Flex> 
    </Card>
    </>
  )
}
