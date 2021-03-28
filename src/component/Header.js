import React, { Component } from "react";
import Data from "../data/data.json";
import Image from './Image';

class Header extends Component {
  render() {
    return (
      <div className="banner">
          <Image src={Data.header.image.src} alt={Data.header.image.alt}/>
      </div>
        
    );
  }
}

export default Header;