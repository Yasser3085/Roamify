import { useState } from 'react';
import Navbar from './comp/navbar';

import Card from './comp/Card';
import { Flex , chakra} from '@chakra-ui/react';
import CardCarousel from './comp/carousel';
import Footer from './comp/footer'

function App() {

  const [filterText, setFilterText] = useState('');

  const handleFilterText = (text) => {
    setFilterText(text);
  };

  return (
    <>
    <Navbar onFilterText={handleFilterText} />

      <CardCarousel filterText={filterText} />
      <Footer/>
    </>
  );
}

export default App;
