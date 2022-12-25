import { Button, Flex, Heading, Input, Text, useColorMode, useColorModeValue, UnorderedList, Link, WrapItem, Image, Box, Spacer, Card } from "@chakra-ui/react";
import NextLink from 'next/link'
export default function Article(props : any) {
    const description = props.description;
    const srcImg = props.srcImg;
    const pseudo = props.pseudo;
    const date = props.date;
    return (
        <Flex mt="50px">
        <Card maxWidth="888px" pb="26px" fontFamily="Roboto,sans-serif">
        <Flex pt='14px' border-radius='6px'
        bg='#fff' box-shadow='0 3px 6px rgb(0 0 0 / 16%)'
        mb = '32px'
        p = '12px 16px 0'
        display='block'
        overflow= 'hidden'>
            <Flex p='3px 0 0 60px' min-height='48px' position='relative' m='0 0 14px'>
                <Flex position="absolute" left="-15px" top="-15px">
                <Image
                boxSize='55px'
                src="/LogoOnlyCats.png"
                alt="logoOnlyFan"
                m="12px"
                />
                </Flex>
                <Flex>
                <Heading mb={6} fontSize='17px' fontFamily="Roboto,sans-serif">OnlyCats</Heading>
                </Flex>
                <Flex position="absolute" pl="80px" top="-2" left="12">
                <Image
                boxSize='18px'
                src="/quality.png"
                alt="logoOnlyFan"
                m="10px"
                />
                </Flex>
                <Flex position="absolute" pt="6">
                    <Text fontSize="13px" color="grey">@onlyCats</Text>
                </Flex>
                <Flex position="absolute" right="0">
                    <Text fontSize="15px" color="grey">{date}</Text>
                </Flex>
            </Flex>
            <Flex pt="6px">
                    <Text fontFamily="Roboto,sans-serif" fontSize="17px">
                        {description}
                        <br/>
                        <Link color="blue.300" as={NextLink} href={pseudo}>@{pseudo}</Link>
                    </Text>

            </Flex>

            <Flex mt="20px">
                <Image
                    float="left"
                    width="1000px"
                    height= "525px"
                    object-fit="cover"
                    src={srcImg}
                    alt="Img"
                />
            </Flex>

        </Flex>
        </Card>
        </Flex> 
    )
}