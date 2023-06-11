import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from './Card';
import { Flex, chakra } from '@chakra-ui/react';

export default function CardCarousel({ filterText }) {
  const cards = [
    {
      name: "Paris",
      title: "Indulge in the romance and charm of the City of Love. From the Eiffel Tower to the Louvre Museum, Paris offers a perfect blend of history, art, and gastronomy. Stroll along the Seine, explore hidden streets, and savor exquisite pastries and world-class cuisine.",
      Src: "https://cdn.mos.cms.futurecdn.net/pD3bsKPrjsqNiFDGRL5oq6.jpg"
    },
    {
      name: "London",
      title: "Uncover the rich history and cosmopolitan vibe of the vibrant capital of the United Kingdom. From iconic landmarks like Big Ben and the Tower of London to world-class museums, bustling markets, and charming parks",
      Src: "https://images.musement.com/cover/0002/49/london-jpeg_header-148518.jpeg"
    },
    {
      name: 'New York',
      title: 'Experience the bustling energy of the city that never sleeps, with iconic landmarks like Times Square, Statue of Liberty, and Broadway shows. Immerse yourself in diverse cultures, vibrant art scenes, and a culinary paradise that will leave you craving for more.',
      Src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg'
    },
    {
      name: 'Tokyo',
      title: "Immerse yourself in the captivating fusion of ancient traditions and futuristic innovation in Tokyo. Explore ancient temples, witness breathtaking cherry blossoms, indulge in exquisite cuisine, and dive into the bustling streets of Shibuya, making it an unforgettable cultural adventure.",
      Src: "https://blog.japanwondertravel.com/wp-content/uploads/2022/03/manuel-velasquez-ssfp9okORYs-unsplash.jpg"
    }
    
    ,
    
    {
      name: "Barcelona",
      title: "A lively city by the sea, famous for beautiful buildings like La Sagrada Familia. Walk around the charming Gothic Quarter, enjoy sunny beaches, taste delicious small plates called tapas, and feel the vibrant energy of this diverse and exciting place.",
      Src: 'https://cdn.vox-cdn.com/thumbor/JwFWOgXHILKQDHRNWG1wHEis_Vk=/323x0:4130x1993/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/16013556/shutterstock_785442694.jpg'
    },{
      name:'Dubai' , 
      title:'Discover a mesmerizing blend of luxury and tradition in the futuristic city of Dubai. From soaring skyscrapers like the Burj Khalifa to extravagant shopping malls and stunning desert landscapes, this city offers unique experiences, exquisite cuisine, and a vibrant nightlife.',
      Src:"https://www.cunard.com/content/dam/cunard/inventory-assets/ports/DXB/DXB.jpg"
    }
  ];

  const filteredCards = filterText
    ? cards.filter((card) =>
        card.name.toLowerCase().startsWith(filterText.toLowerCase().trim())
      )
    : cards;

  const centerSlidePercentage = filteredCards.length === 1 ? 100 : 33;

  return (
    <>
      <Flex w={'90%'} height={'100px'} alignItems={'center'} mx={10} mt={5}>
        <chakra.h1 color={'#4D4E6C'} borderBottom={'1px solid #4D4E6C'} fontSize={'4xl'} fontFamily={'Viga'}>
          Trending Now <br/>
          <chakra.h1 color={'#4D4E6C'} borderBottom={'1px solid #4D4E6C'} fontWeight='light' fontSize={'large'} fontFamily={'arial'} >
       
          Know the latest on travel updates , visa requirements and newest attractions
        </chakra.h1>
        </chakra.h1>
        
      </Flex>
      

      <Carousel 
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        emulateTouch={true}
        infiniteLoop={true}
        centerMode={true}
        swipeable={true}
        centerSlidePercentage={centerSlidePercentage}
      >
        {filteredCards.map((card) => (
          <Card key={card.name} name={card.name} title={card.title} Src={card.Src} />
        ))}
      </Carousel>

      {filterText && filteredCards.length === 0 && (
        <Flex justifyContent="center" alignItems="center" mt={5}>
          <chakra.p>No city found.</chakra.p>
        </Flex>
      )}
    </>
  );
}
