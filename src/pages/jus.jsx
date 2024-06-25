
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import '../index.css';

import React from 'react';

const Jus = () => {
  return (
    <>
      
      
      <ImageList cols={3} sx={{
         background:'linear-gradient(to right top , #f2cf8c,#7e4000,#38220f)', 
         width:"100%",gap:"30px",
         ml:0,mt:0,padding:"40px", height: "100%" }}>
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
    img: 'https://images.unsplash.com/photo-1583578449206-ac0980dd77b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlbW9uJTIwanVzfGVufDB8fDB8fHww',
    title: 'Lemon',
    author: 'price : 2.700 TND',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHN0cmFiZXJyeSUyMGp1c3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Strawberry',
    author: 'price : 3.000 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1618046364546-81e9d03d39a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9yYW5nZSUyMGp1c3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Orange',
    author: 'price : 3.000 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1685967836529-b0e8d6938227?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fEJBTkFOJTIwSlVTfGVufDB8fDB8fHww',
    title: 'Banana',
    author: 'price : 3.000 TND',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFuYW5hcyUyMEp1c3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Ananas',
    author: 'price : 3.700 TND',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1601477575140-db3df99c3390?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZpZyUyMGp1c3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Fig',
    author: 'price : 3.700 TND',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvZGF8ZW58MHx8MHx8fDA%3D',
    title: 'Soda',
    author: 'price : 2.000 TND',
  },
  
];

export default Jus;
