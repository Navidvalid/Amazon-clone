import React from 'react';
import './Home.css';
import Product from './Product/Product';
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const products = [
    {
      id: uuidv4(),
      title: 'Clarins Double Serum 1.7 Oz.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-x_Pu2yDlh2Z7T84i9i0s2iFdLMlal-YhGJQWS3I3yj-i2IjsD76ANxuky4uLhZceuTzeLsj5&usqp=CAc',
      price: 126.0,
      rating: 4,
    },

    {
      id: uuidv4(),
      title: 'AVYA SIGNATURE SET',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALi20WwCfuh5jUr-KCrkm8jUJKIvJsOfCKpqv8jEz5AoqnbMlCIiDeLUXigP1n8xCrQye4a0&usqp=CAc',
      price: 280,
      rating: 4,
    },
    {
      id: uuidv4(),
      title: 'iPhone 12 Mini',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzWocxuH3x--q3hMqrKEhp0pajZrl-ZhKhftUPRQFH6zx6RYPnBwl3bAxTRg&usqp=CAc',
      price: 299,
      rating: 5,
    },
    {
      id: uuidv4(),
      title: 'PC Connection Apple Products Showcase',
      image:
        'https://www.connection.com/~/media/images/brands/a/apple/applewatch/1193318-apple-watch-se.jpg?h=360&la=en&w=550&v=1',
      price: 299,
      rating: 4,
    },
    {
      id: uuidv4(),
      title: 'Upcoming Apple Products Guide',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8m3u48X2ol9BiwqA4MT4lq_XfpU0dYy_Ak5NzPTNiWiC3_Grdl79MpZTTZQ&usqp=CAc',
      price: 899,
      rating: 5,
    },
    {
      id: uuidv4(),
      title: 'Apple TV 4K 32GB',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlk2sZutj1MroP4HYFCoU874ACfKSR6xk1xypMze42mwclk5mNTNAo-1-sXw&usqp=CAc',
      price: 179,
      rating: 4,
    },
    {
      id: uuidv4(),
      title: 'smoothing & repairing skin essentials',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZ-HgK7mIke4b0er-ceeHMfjYJzKCf5qR6n8jIht3ukOjlsZhhaDnP7UQ2Fn84bLuu3cOwJpjsw&usqp=CAc',
      price: 999,
      rating: 5,
    },
    {
      id: uuidv4(),
      title: 'LEVO II',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFHmSHj6DQTnVLXAz5cYxIupvE9uEZP_KxlxKkFzAwOuvqKKrkVKTUFx6vhEl5EO-rLNnjnA&usqp=CAc',
      price: 259,
      rating: 5,
    },
    {
      id: uuidv4(),
      title: 'Nutri Chopper Kitchen Slicer & Chopper in Black',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbRXPaUv13We628Q0yskLrLcPZ8A9Yda-qGSoE0EcQSEmZdVrXxnXYN-oBWykZZL_1jHX7Reu&usqp=CAc',
      price: 29,
      rating: 4,
    },
    {
      id: uuidv4(),
      title:
        'Ninja® Foodi® 6.5 qt. 11-in-1 Pro Pressure Cooker + Air Fryer with',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8m3u48X2ol9BiwqA4MT4lq_XfpU0dYy_Ak5NzPTNiWiC3_Grdl79MpZTTZQ&usqp=CAc',
      price: 199,
      rating: 5,
    },
    {
      id: uuidv4(),
      title:
        'Calphalon Simply Pots and Pans Set, 10 Piece Cookware Set, Nonstick',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Chj92lXXLN69G74P2LzoFKYTsOD2_MJnPzR4iXV7cuqN7z4y2kezIRbuHjUW3J1gXKKzrsoB&usqp=CAc',
      price: 189,
      rating: 4,
    },
    {
      id: uuidv4(),
      title: 'Portal TV',
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRT_4ByiQvpH9yOKf9cLlWZJVq9wrCvjg7YbM8di6gTuzELdg8CxqdcZYGLpBIuZ3Fn6wY8N8k99mQ&usqp=CAc',
      price: 129,
      rating: 3,
    },

    {
      id: uuidv4(),
      title: 'Choose your Chromecast device',
      image:
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRA8QXH3pqNOK-3nKAKDRrE4U0QWSXQBvKRNNjmbVg8MwQNu1vQnzt2zJ2izYgi2VfHzqzzU46S2aql&usqp=CAc',
      price: 49,
      rating: 4,
    },
    {
      id: uuidv4(),
      title: 'Samsung 50 Q60T Titan',
      image:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTlXTHT2VIwOsGth5qD_D7-2Kyb5w-h3B79NDkK-bCcn6XWZjV8iwq1eZGCTgw&usqp=CAc',
      price: 749,
      rating: 4,
    },
    {
      id: uuidv4(),
      title: 'SunBriteTV - 65" Class LED Outdoor Partial Sun 4K UHD TV',
      image:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356874_sd.jpg;maxHeight=640;maxWidth=550',
      price: 7000,
      rating: 5,
    },
  ];
  return (
    <div className='home'>
      <div className='home-container'>
        <img
          className='home-image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />

        <div className='home-row'>
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
