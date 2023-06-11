import React from "react";
import { Box, Flex, Image, Link, chakra , Button} from "@chakra-ui/react";

export default function Card(props){
  return (
    <Flex
     
      _dark={{ bg: "#1A202C" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
        h={64}
          fit="cover"
          src={props.Src}
          alt="Article"
        />

        <Box p={6}>
          <Box>
       
            <chakra.h1
            
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              
            >
            {props.name}
            </chakra.h1>
            <chakra.p
              mt={2}
              fontSize="sm"
              color="gray.600"
              _dark={{ color: "gray.400" }}
            >
            {props.title}
            </chakra.p>
          </Box>

          <Box mt={4}>
            <Flex alignItems="center">
              <Flex alignItems="center">
            
            
              </Flex>
              <Button colorScheme='teal' variant='outline'>
   Discover More
  </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

