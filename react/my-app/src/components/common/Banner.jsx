import React from 'react';
import '../css/Banner.modules.css';
import title from  "../assets/title.png"

const Banner = () => {
  return (
    
      <div>
      <img src={title} alt="topImage" className= "imagem" />
    </div>
   
  );
}

export default Banner