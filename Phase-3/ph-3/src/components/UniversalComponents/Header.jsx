import React, { useState, useEffect} from 'react';
import '../../header.css';
import ham from '../../photos/Hamburger_icon.png';
import cross from '../../photos/Cross_icon.png';

function Header(props) {
    return (
      <div className="header">
        <img src={cross} alt="" />
        {/* <div className="Heading">Mav Program</div> */}
      </div>
    );
  }
  
  export default Header;