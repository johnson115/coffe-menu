
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import '../index.css';
import Header from "../components/header";
import React from 'react';

const Coffe = () => {
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
    img: 'https://images.unsplash.com/photo-1611832568224-7204e28a5a0d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Capuccinho',
    author: 'price : 2.000 TND',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1534687941688-651ccaafbff8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FwdWNjaW5vfGVufDB8fDB8fHwy',
    title: 'Direct',
    author: 'price : 2.400 TND',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1514952902821-eaf63e66c12e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsayUyMGN1cHxlbnwwfHwwfHx8Mg%3D%3D',
    title: 'Milk',
    author: 'price : 1.400 TND',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1547737992-582b4bbef433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHRoJUMzJUE5JTIwbWVudGhlfGVufDB8fDB8fHwy',
    title: 'Tea Cup',
    author: 'price : 1.400 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1591299089616-c9604047b1a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGglQzMlQTklMjBtZW50aGV8ZW58MHx8MHx8fDI%3D',
    title: 'Thé menthe',
    author: 'price : 2.000 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1648237200924-dc7ecd21e88d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'thé amande',
    author: 'price : 2.700 TND',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1608744940436-5fca4a3c8786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlZCUyMHRoJUMzJUE5fGVufDB8fDB8fHwy',
    title: 'the grenadine',
    author: 'price : 2.000 TND',
  },
  ];
export default Coffe;
