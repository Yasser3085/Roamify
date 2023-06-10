import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/viga';
import '@fontsource/alegreya-sans-sc/300.css';
import '@fontsource/alegreya-sans-sc/400.css';
import '@fontsource/alegreya-sans-sc/500.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ChakraProvider>

    <App />
    
    </ChakraProvider>
)
