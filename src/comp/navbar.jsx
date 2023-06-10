import {
    Text,
    Img,
    Box,
    Flex,
    useMediaQuery,
    chakra,
    Input,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    VStack,
  } from '@chakra-ui/react';
  import { useState, useEffect } from 'react';
  import { SiYourtraveldottv } from 'react-icons/si';
  
  export default function Navbar({ onFilterText }) {
    const [isMobile] = useMediaQuery('(max-width: 768px)');
    const [searchTerm, setSearchTerm] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [formErrors, setFormErrors] = useState({ name: '', email: '', password: '' });
    const [signUpModalOpen, setSignUpModalOpen] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
  
    const handleInputChange = (event) => {
        const inputText = event.target.value;
        setSearchTerm(inputText);
        onFilterText(inputText.charAt(0)); // Pass only the first letter to the filter
      };
  
    const validateForm = () => {
      const errors = {};
  
      if (!formData.name.trim()) {
        errors.name = 'Name is required';
      }
  
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email is invalid';
      }
  
      if (!formData.password.trim()) {
        errors.password = 'Password is required';
      } else if (formData.password.length < 4) {
        errors.password = 'Password must be at least 4 characters long';
      }
  
      return errors;
    };
  
    const handleRegistration = () => {
      const errors = validateForm();
  
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
      } else {
        // Save user data to localStorage
        localStorage.setItem('isRegistered', 'true');
        localStorage.setItem('userData', JSON.stringify(formData));
  
        setIsRegistered(true);
        setSignUpModalOpen(false);
        setLoginModalOpen(true); // Open the login modal after registration
      }
    };
  
    const handleLogin = () => {
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        if (formData.email === userData.email && formData.password === userData.password) {
          setLoggedIn(true);
          setLoginModalOpen(false);
        } else {
          setFormErrors({ email: 'Invalid email or password', password: 'Invalid email or password' });
        }
      }
    };
  
    const handleLogout = () => {
      localStorage.removeItem('isRegistered');
      localStorage.removeItem('userData');
      setLoggedIn(false);
    };
  
    useEffect(() => {
      const storedIsRegistered = localStorage.getItem('isRegistered');
      if (storedIsRegistered) {
        setIsRegistered(true);
      }
  
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        setFormData(userData);
      }
    }, []);
  
    useEffect(() => {
      if (!loggedIn) {
        setFormData({ email: '', password: '' });
        setFormErrors({ email: '', password: '' });
      }
    }, [loggedIn]);
  
    return (
      <Box height={'30rem'} width={'100%'} position="relative">
        <Img
          objectFit={'cover'}
          src="https://image.cnbcfm.com/api/v1/image/107178919-1673854215895-gettyimages-669463000-shutterstock_621020393.jpeg?v=1674003106"
          alt=""
          height="100%"
          width="100%"
          position="absolute"
        />
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
          textShadow={'0 0 50px #000000'}
          fontSize="90px"
          
          fontFamily={'Alegreya Sans SC'}
          zIndex={1}
        >
          Plan Your Next Trip
        </Text>
        <Flex
          className="nav-container"
          bg={'rgba(0,0,0,0.3)'}
          height={'100px'}
          width={'100%'}
          position={'absolute'}
          alignItems={isMobile ? 'flex-start' : 'center'}
          justifyContent={isMobile ? 'center' : 'space-between'}
          px={6}
          color={'white'}
          flexDirection={isMobile ? 'column' : 'row'}
        >
          <SiYourtraveldottv size={'50'} />
          <chakra.h1 ml={2} fontSize="3rem" fontFamily={'Viga'}>
            Roamify
          </chakra.h1>
  
          <Flex m={5} justifyContent={'center'} className="search-div" width={'100%'}>
            <Box>
              <Input
                border={'1px solid white'}
                color="white"
                textAlign={isMobile ? 'center' : 'initial'}
                placeholder="Search"
                _placeholder={{ color: 'inherit' }}
               
                onChange={handleInputChange}
              />
            </Box>
          </Flex>
          <Flex align="center">
            {loggedIn ? (
              <>
                <Button colorScheme="white" variant="outline" ml={isMobile ? '0' : '4'}>
                  Profile
                </Button>
                <Button colorScheme="white" variant="outline" ml={isMobile ? '0' : '4'} onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button colorScheme="white" variant="outline" ml={isMobile ? '0' : '4'} onClick={() => setSignUpModalOpen(true)}>
                  Register
                </Button>
                <Button colorScheme="white" variant="outline" ml={isMobile ? '0' : '4'} onClick={() => setLoginModalOpen(true)}>
                  Login
                </Button>
              </>
            )}
          </Flex>
        </Flex>
        <Modal isOpen={signUpModalOpen} onClose={() => setSignUpModalOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign Up</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={3}>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </FormControl>
                {formErrors.name && <Box color="red">{formErrors.name}</Box>}
                <FormControl id="email" isRequired>
                  <FormLabel>Email Address</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </FormControl>
                {formErrors.email && <Box color="red">{formErrors.email}</Box>}
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </FormControl>
                {formErrors.password && <Box color="red">{formErrors.password}</Box>}
                <Button variant="outline" onClick={handleRegistration}>
                  Sign Up
                </Button>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Modal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={3}>
                <FormControl id="email" isRequired>
                  <FormLabel>Email Address</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    autoComplete="off" 
                  />
                </FormControl>
                {formErrors.email && <Box color="red">{formErrors.email}</Box>}
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    
                    onChange={handleInputChange}
                  />
                </FormControl>
                {formErrors.password && <Box color="red">{formErrors.password}</Box>}
                <Button variant="outline" onClick={handleLogin}>
                  Login
                </Button>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    );
  }
 
  