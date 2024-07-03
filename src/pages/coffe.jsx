
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import '../index.css';
import IconButton from '@mui/material/IconButton';


import React from 'react';

const Coffe = () => {
  return (
    < >
      
  
    <ImageList cols={3} sx={{
       background:'linear-gradient(to right top , #f2cf8c,#7e4000,#38220f)', 
       width:"100%", ml:0,mt:0,padding:"40px", height: "100%", gap:"20px" }}>
    {itemData.map((item) => (
      <ImageListItem key={item.img}>
      <img
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=248&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
      <ImageListItemBar
      sx={{textAlign:"center"}}
        title={item.title}
        subtitle={item.author}
        actionIcon={
          <IconButton
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            aria-label={`info about ${item.title}`}
          >
            
          </IconButton>
        }
      />
    </ImageListItem>
    ))}
    </ImageList>
    
  </>
  );
}
const itemData = [
  {
    img: 'https://images.stockcake.com/public/b/b/e/bbe52898-7026-4a3d-a79a-b051c2e47ddb_large/steaming-coffee-cup-stockcake.jpg',
    title: 'American ',
    author: ' 1.600 TND',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.stockcake.com/public/7/2/3/7238e9d1-d50b-4059-8ff2-23de2dcea922_large/espresso-pouring-freshly-stockcake.jpg',
    title: 'Express ',
    author: ' 1.500 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1589224637274-2a30864d41b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW4lMjBjb2ZmZXxlbnwwfHwwfHx8Mg%3D%3D',
    title: 'Allonje ',
    author: ' 1.500 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1589224637274-2a30864d41b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW4lMjBjb2ZmZXxlbnwwfHwwfHx8Mg%3D%3D',
    title: 'Nescafé ',
    author: ' 2.300 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1611832568224-7204e28a5a0d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Capucino',
    author: ' 2.800 TND',
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG0E2aPJqtnVLKIf2cyC_GYkc4-Z4HGHSreg&s',
    title: 'Capussin',
    author: ' 1.600 TND',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1534687941688-651ccaafbff8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FwdWNjaW5vfGVufDB8fDB8fHwy',
    title: 'Direct',
    author: ' 1.800 TND',
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ggLapQH_RByi3HjQjzlC1x00rd-6lyhFvggEUJ_Sf4n-MGuP4BATGqW03X4DX2gSjVk&usqp=CAU',
    title: 'Caramelle',
    author: ' 2.300 TND',
  },
  {
    img: 'https://cafeambiance.fr/wp-content/uploads/2022/12/cafe-noisette.jpg',
    title: 'Noisette',
    author: ' 2.300 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1514952902821-eaf63e66c12e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsayUyMGN1cHxlbnwwfHwwfHx8Mg%3D%3D',
    title: 'Milk',
    author: ' 2.000 TND',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.immediate.co.uk/production/volatile/sites/2/2021/11/Mocha-1fc71f7.png?quality=90&resize=556,505',
    title: 'Café Chocolin',
    author: ' 2.000 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hvY29sYXQlMjBjaGF1ZHxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Chocolat chaud',
    author: ' 2.700 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1589985902809-39d25db22101?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhZmUlMjBnbGFjZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Café glacé',
    author: ' 2.500 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1547737992-582b4bbef433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHRoJUMzJUE5JTIwbWVudGhlfGVufDB8fDB8fHwy',
    title: 'Thé ',
    author: ' 1.200 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1591299089616-c9604047b1a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGglQzMlQTklMjBtZW50aGV8ZW58MHx8MHx8fDI%3D',
    title: 'Thé menthe',
    author: ' 1.500 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1648237200924-dc7ecd21e88d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'thé amande',
    author: ' 3.500 TND',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1608744940436-5fca4a3c8786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlZCUyMHRoJUMzJUE5fGVufDB8fDB8fHwy',
    title: 'the grenadine',
    author: ' 2.500 TND',
  },
  {
    img: 'https://static.vecteezy.com/ti/photos-gratuite/p2/27101083-une-traditionnel-arabe-dessert-appele-baklava-avec-des-noisettes-et-mon-cheri-est-communement-apprecie-pendant-ramadan-photo.jpg',
    title: 'thé Baklawa',
    author: ' 5.500 TND',
  },
  ];
export default Coffe;
