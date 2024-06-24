
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import '../index.css';
import Header from "../components/header";
import React from 'react';

const Jus = () => {
  return (
    <>
      
      <Header text="Our Menu"/>
      <ImageList cols={3} sx={{
         background:'linear-gradient(to right top , #f2cf8c,#7e4000,#38220f)', 
         width:` calc(100%-240px)`,ml:"240px",mt:0,padding:"40px", height: "100%" }}>
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
            subtitle={<span>{item.author}</span>}
            position="below"
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
    title: 'American coffe',
    author: 'price : 1.700 TND',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.stockcake.com/public/7/2/3/7238e9d1-d50b-4059-8ff2-23de2dcea922_large/espresso-pouring-freshly-stockcake.jpg',
    title: 'Express Coffe',
    author: 'price : 1.700 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1589224637274-2a30864d41b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW4lMjBjb2ZmZXxlbnwwfHwwfHx8Mg%3D%3D',
    title: 'Allonje Coffe',
    author: 'price : 1.700 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];

export default Jus;
