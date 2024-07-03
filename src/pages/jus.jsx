
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
    title: 'Citronnade',
    author: ' 3.000 TND',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHN0cmFiZXJyeSUyMGp1c3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Fraise',
    author: ' 6.000 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1618046364546-81e9d03d39a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9yYW5nZSUyMGp1c3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Orange',
    author: ' 2.000 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1685967836529-b0e8d6938227?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fEJBTkFOJTIwSlVTfGVufDB8fDB8fHww',
    title: 'Banana',
    author: ' 6.000 TND',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFuYW5hcyUyMEp1c3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Ananas',
    author: ' 3.700 TND',
    cols: 2,
  },
  {
    img: 'https://extracteur-de-jus.com/wp-content/uploads/2023/08/Recette-Smoothie-%C3%A0-la-banane-et-aux-dattes2.jpg',
    title: 'Banane + Datte',
    author: ' 6.500 TND',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCP3UpRpLKfHCMhiqpInEwQPHrUvZ8zToywA&s',
    title: 'Jus aux Fruit sec',
    author: ' 7.000 TND',
    cols: 2,
  },
  {
    img: 'https://cuisinovores.com/wp-content/uploads/2023/04/photo_cocktail_mojito_framboise_Midjourneyl.jpg',
    title: 'Mojito fruits',
    author: ' 4.000 TND',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1634496064950-02f043806b09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9qaXRvJTIwdmlyZ2lufGVufDB8fDB8fHww',
    title: 'Mojito virgin',
    author: ' 3.500 TND',
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm29TDVnmdXFsiCWFBTph3-ciGiIgbWeVYSg&s',
    title: 'Jwejem',
    author: ' 8.000 TND',
    cols: 2,
  },
  {
    img: 'https://img.cuisineaz.com/660x660/2017/08/29/i132044-smoothie-4-fruits.jpeg',
    title: 'Smothi',
    author: '4.000 TND',
    cols: 2,
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1681487658177-36170fa6bb06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29kYSUyMGJvaXRlfGVufDB8fDB8fHww',
    title: 'soda boite',
    author: ' 2.500 TND',
  },
  {
    img: 'https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvZGF8ZW58MHx8MHx8fDA%3D',
    title: 'Soda',
    author: ' 2.000 TND',
  },
  
  
];

export default Jus;
