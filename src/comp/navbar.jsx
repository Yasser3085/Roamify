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
import VideoBackground from './videobg';

export default function Navbar({ onFilterText }) {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [searchTerm, setSearchTerm] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '', password: '' });
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);


  useEffect(() => {
    // Check if user is already registered
    const storedIsRegistered = localStorage.getItem('isRegistered');
    if (storedIsRegistered === 'true') {
      setIsRegistered(true);
    }

    // Check if user is already logged in
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn === 'true') {
      setLoggedIn(true);
      setUserName(localStorage.getItem('userName'));
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchTerm(value);
    onFilterText(value.charAt(0));
  };

  const handleRegistrationInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
      localStorage.setItem('userName', formData.name); // Store the user's name

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
        // Store login status and user name
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userName', userData.name);

        setLoggedIn(true);
        setUserName(userData.name);
        setLoginModalOpen(false);
      } else {
        setFormErrors({ email: 'Invalid email or password', password: 'Invalid email or password' });
      }
    }
  };

  const handleLogout = () => {
    // Remove stored login status and user name
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userName');

    setIsRegistered(false);
    setLoggedIn(false);
  };

  return ( <>
   

    <Box height={'30rem'} width={'100%'} position="relative">
  
    <video
        src="./images/video4.mp4" // Replace with the actual video source
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        autoPlay
        muted
        loop
      ></video>
      
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
        textShadow={'0 0 30px #000000'}
        fontSize={isMobile ? '40px' : '80px'}
       fontWeight={'light'}
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
        <chakra.h1 ml={2} fontSize={isMobile ? '20px' : '3rem'} fontFamily={'Viga'}>
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
              value={searchTerm}
              onChange={handleInputChange}
            />
          </Box>
        </Flex>
        <Flex align="center">
          {loggedIn ? (
            <>
              <Text color="white" fontWeight="bold" ml={isMobile ? '0' : '4'}>
                Welcome, {userName}
              </Text>
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
                  onChange={handleRegistrationInputChange}
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
                  onChange={handleRegistrationInputChange}
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
                  onChange={handleRegistrationInputChange}
                />
              </FormControl>
              {formErrors.password && <Box color="red">{formErrors.password}</Box>}
              <Button color="black" onClick={handleRegistration}>
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
                  onChange={handleRegistrationInputChange}
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
                  onChange={handleRegistrationInputChange}
                />
              </FormControl>
              {formErrors.password && <Box color="red">{formErrors.password}</Box>}
              <Button  onClick={handleLogin}>
                Login
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
    </>
  );
}
