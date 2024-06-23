
import '../index.css';
import React from 'react';


const Header = ({text}) => {
  
  return (
    <div className="head-bar">
      <div className="tooo">
        
        
        <div>
          <h1>{text} </h1>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
