import {
    Box,
    Flex,
    HStack,
   
    Link,
    Stack,
    Text,
    VStack,
    Divider,
    Icon,
  } from "@chakra-ui/react";
  import React from "react";
  import { GrInstagram } from "react-icons/gr";
  import { FaFacebook, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
  import { FiTwitter } from "react-icons/fi";
  
  export default function App(){
    return (
      <Box  bg="white" borderTop='1px solid black' mt={20} _dark={{ bg: "gray.600" }}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          w="full"
          justify="space-between"
          p={10}
        >
          <Flex justify="center">
        
          </Flex>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{ base: "12px", md: "16px" }}
            color="gray.800"
            _dark={{ color: "white" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">FAQS</Link>
              
            </Flex>
            <Flex justify="start" direction="column">
              <Link  textTransform="uppercase" borderBottom={'1px'}>Services</Link>
              <Link textTransform="uppercase">Where To Stay </Link>
              <Link textTransform="uppercase">Where To Do </Link>
              <Link textTransform="uppercase">Where To Eat </Link>
            </Flex>
          </HStack>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{ base: "12px", md: "16px" }}
            color="gray.800"
            _dark={{ color: "white" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">Show Case</Link>
              <Link textTransform="uppercase">Widget Kit</Link>
              <Link textTransform="uppercase">Support</Link>
            </Flex>
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">About Us</Link>
              <Link textTransform="uppercase">Contact Us</Link>
              <Link textTransform="uppercase">Resources</Link>
            </Flex>
          </HStack>
        </Stack>
        <Divider
          w="95%"
          mx="auto"
          color="gray.600"
          _dark={{ color: "#F9FAFB" }}
          h="3.5px"
        />
        <VStack py={3}>
          <HStack justify="center">
          <Link href="https://www.facebook.com">
      <a>
        <FaFacebook size={'25px'}  />
      </a>
    </Link>
            <Link href="https://www.twitter.com">
      <a>
        <FaTwitter size={'25px'} />
      </a>
    </Link>
            <Link href="https://www.instagram.com">
      <a>
        <GrInstagram size={'25px'}  />
      </a>
    </Link>
            <Link href="https://www.linkedin.com">
      <a>
        <FaLinkedinIn  size={'25px'} />
      </a>
    </Link>
          </HStack>
  
          <Text textAlign="center" fontSize="smaller" _dark={{ color: "white" }}>
            &copy;Copyright. All rights reserved.
          </Text>
        </VStack>
      </Box>
    );
  }
  
  